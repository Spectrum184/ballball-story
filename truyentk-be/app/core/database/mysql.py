from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from app.config import settings

Base = declarative_base()
engine = create_engine(settings.DATABASE_URI, connect_args={
    "check_same_thread": False
})

SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False)


def get_db_mysql():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
