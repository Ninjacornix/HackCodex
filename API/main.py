from make_slide import make_slide
from fs import ls, mkdir, rm
import asyncio
from pprint import pprint
from sse_starlette.sse import EventSourceResponse
from prompt_toc import prompt_toc
import json
from typing import Union
from fastapi import FastAPI, Request

from fastapi.middleware.cors import CORSMiddleware

from return_usage import get_usage
from summarize_web import get_summarised


from dotenv import load_dotenv
load_dotenv()


app = FastAPI()


origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get('/make_toc')
async def make_toc(request: Request, theme: str, title: str, context: str = "", secret: str = ""):

    # pprint(request.headers)

    print(secret)

    async def event_generator():
        for x in prompt_toc(theme, title, context):
            if await request.is_disconnected():
                break

            if x == {}:
                continue

            yield json.dumps(x)

            # await asyncio.sleep(STREAM_DELAY)

    return EventSourceResponse(event_generator())


@app.get('/get_usage')
async def _get_usage(request: Request, id: str, secret: str = ""):

    print(secret)

    return get_usage(id)


@app.get('/get_summarised')
async def _get_summarised(request: Request, text: str, urls: str, secret: str = ""):

    async def event_generator():
        for x in get_summarised(text, urls.split("|")):
            if await request.is_disconnected():
                break

            if x == {}:
                continue

            yield x

    return EventSourceResponse(event_generator())


@app.post('/fs')
async def _fs(request: Request, secret: str = ""):
    # get body of request

    body = await request.body()

    # convert to json

    body = json.loads(body)

    # get action

    command = body["command"]

    if command == "ls":
        return list(ls(body["id"], body["path"]))

    elif command == "mkdir":
        return mkdir(body["id"], body["path"])

    elif command == "rm":
        return rm(body["id"], body["path"])


@app.post('/make_slide')
async def _make_slide(request: Request, secret: str = ""):

    body = await request.body()
    body = json.loads(body)

    title = body["title"]
    theme = body["theme"]
    summary = body["summary"]
    slide_json = body["slide_json"]

    return make_slide(title, theme, summary, slide_json)


@app.get('/make_slide')
async def _make_slide(request: Request,
                      title: str,
                      theme: str,
                      summary: str,
                      slide_json: str,
                      secret: str = ""):

    return make_slide(title, theme, summary, slide_json)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
