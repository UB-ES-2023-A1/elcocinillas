FROM python:3.11

WORKDIR /code

COPY ./requirements.txt /code/requirements.txt

RUN pip install --no-cache-dir --upgrade pip
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

ENV APIKEY_FIRESTORE=""

RUN echo $APIKEY_FIRESTORE > /code/api/src/database/elcocinillas.json

COPY . /code/api

CMD ["uvicorn", "--app-dir=/code/api/src", "main:app", "--host", "0.0.0.0", "--port", "80"]