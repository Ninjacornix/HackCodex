import asyncio
from pprint import pprint
from sse_starlette.sse import EventSourceResponse
from prompt_toc import prompt_toc
import json
from typing import Union
from fastapi import FastAPI, Request

from fastapi.middleware.cors import CORSMiddleware

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


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
