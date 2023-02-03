from fastapi import FastAPI
from api import test_api

app = FastAPI()


@app.get("/")
async def root():
    return test_api()


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}


@app.post("/hello")
async def post_hello():
    return {"message": "Post method"}
