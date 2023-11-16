FROM python:3.11

WORKDIR /code

COPY ./requirements.txt /code/requirements.txt

RUN pip install --no-cache-dir --upgrade pip
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

ENV FIREBASE_JSON ${FIREBASE_JSON}

COPY . /code/api

RUN apt-get update && apt-get install -y jq
RUN echo "{$FIREBASE_JSON}" | jq . > /code/api/src/database/elcocinillas.json

CMD ["uvicorn", "--app-dir=/code/api/src", "main:app", "--host", "0.0.0.0", "--port", "80"]