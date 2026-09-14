# from sqlalchemy import Column, Integer, String, Float, DateTime
# from sqlalchemy.sql import func

# from database import Base


# class Prediction(Base):
#     __tablename__ = "predictions"

#     id = Column(Integer, primary_key=True, index=True)
#     user_id = Column(Integer, nullable=True)
#     disease = Column(String(150), nullable=False)
#     confidence = Column(Float, nullable=False)
#     image_name = Column(String(255), nullable=True)
#     created_at = Column(DateTime(timezone=True), server_default=func.now())


# from sqlalchemy import Column, Integer, String, Float, DateTime
# from sqlalchemy.sql import func

# from database import Base


# class Prediction(Base):

#     __tablename__ = "predictions"

#     id = Column(
#         Integer,
#         primary_key=True,
#         index=True
#     )

#     user_id = Column(
#         Integer,
#         nullable=True
#     )

#     disease = Column(
#         String(150),
#         nullable=False
#     )

#     confidence = Column(
#         Float,
#         nullable=False
#     )

#     image_name = Column(
#         String(255),
#         nullable=True
#     )

#     created_at = Column(
#         DateTime(timezone=True),
#         server_default=func.now()
#     )

from sqlalchemy import Column, Integer, String, Float, DateTime
from sqlalchemy.sql import func

from database import Base


class Prediction(Base):

    __tablename__ = "predictions"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    user_id = Column(
        Integer,
        nullable=True
    )

    disease = Column(
        String(150),
        nullable=False
    )

    confidence = Column(
        Float,
        nullable=False
    )

    image_name = Column(
        String(255),
        nullable=True
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )


class ChatHistory(Base):

    __tablename__ = "chat_history"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    user_id = Column(
        Integer,
        nullable=True
    )

    question = Column(
        String,
        nullable=False
    )

    answer = Column(
        String,
        nullable=False
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )