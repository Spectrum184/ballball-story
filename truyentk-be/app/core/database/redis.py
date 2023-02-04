from app.config import settings
from aioredis import from_url


async def get_db_redis():
    db = from_url(settings.REDIS_URI, encoding="utf-8",
                  decode_responses=True)
    try:
        yield db
    finally:
        db.close()
