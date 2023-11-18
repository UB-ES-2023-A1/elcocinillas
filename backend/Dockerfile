FROM python:3.11

WORKDIR /code

COPY ./requirements.txt /code/requirements.txt

RUN pip install --no-cache-dir --upgrade pip
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

ENV FIREBASE_JSON=${FIREBASE_JSON}

COPY . /code/api

RUN echo $FIREBASE_JSON

CMD ["uvicorn", "--app-dir=/code/api/src", "main:app", "--host", "0.0.0.0", "--port", "80"]