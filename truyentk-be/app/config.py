from pydantic import BaseSettings, validator, AnyHttpUrl, RedisDsn
from typing import Union, List, Optional, Dict, Any


class Settings(BaseSettings):
    PROJECT_NAME: str

    BACKEND_CORS_ORIGINS: List[AnyHttpUrl] = []

    @validator("BACKEND_CORS_ORIGINS", pre=True)
    def assemble_cors_origins(cls, v: Union[str, List[str]]) -> Union[List[str], str]:
        if isinstance(v, str) and not v.startswith("["):
            return [i.strip() for i in v.split(",")]
        elif isinstance(v, (list, str)):
            return v
        raise ValueError(v)

    MYSQL_USER: str
    MYSQL_PASSWORD: str
    MYSQL_HOST: str
    MYSQL_PORT: str
    MYSQL_DATABASE: str
    DATABASE_URI: Optional[str] = None

    @validator("DATABASE_URI", pre=True)
    def assemble_db_connection(cls, v: Optional[str], values: Dict[str, Any]) -> Any:
        if isinstance(v, str):
            return v
        return f"mysql://{values.get('MYSQL_USER')}:{values.get('MYSQL_PASSWORD')}@{values.get('MYSQL_HOST')}:" \
               f"{values.get('MYSQL_PORT')}/{values.get('MYSQL_DATABASE')}"

    REDIS_HOST: str
    REDIS_PASSWORD: str
    REDIS_PORT: str
    REDIS_USER: str
    REDIS_DATABASE: str
    REDIS_URI: Optional[RedisDsn] = None

    @validator("REDIS_URI", pre=True)
    def assemble_redis_connection(cls, v: Optional[str], values: Dict[str, Any]) -> Any:
        if isinstance(v, str):
            return v
        return RedisDsn.build(
            scheme="redis",
            host=values.get("REDIS_HOST"),
            port=values.get("REDIS_PORT"),
            password=f"{values.get('REDIS_PASSWORD') or ''}",
            user=f"{values.get('REDIS_USER') or ''}",
            path=f"{values.get('REDIS_DATABASE') or '0'}"
        )

    ACCESS_TOKEN_EXPIRE: str
    ACCESS_TOKEN_SECRET: str
    ACCESS_TOKEN_EXPIRE: str
    ACCESS_TOKEN_SECRET: str

    class Config:
        case_sensitive = True


settings = Settings()
