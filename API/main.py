import json
from typing import Union
from fastapi import FastAPI, Request

from prompt_toc import prompt_toc

from sse_starlette.sse import EventSourceResponse
import asyncio

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


STREAM_DELAY = 1  # second
RETRY_TIMEOUT = 15000  # milisecond


@app.get('/make_toc')
async def message_stream(request: Request, theme: str, title: str, context: str = ""):

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
