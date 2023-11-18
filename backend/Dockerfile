FROM python:3.11

WORKDIR /code

COPY ./requirements.txt /code/requirements.txt

RUN pip install --no-cache-dir --upgrade pip
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

COPY . /code/api

RUN echo '{ "type": "service_account", \
            "project_id": "elcocinillas-93ebe", \
            "private_key_id": "c7415d6ede30073565d1765c742a61266e43bb32", \
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDMdv38hBcJAZ0k\njSgDG8tDn7OFC9errQ41PiGr/ICmUGIQWBnii4KDHlwWWkbjwNlY6sowkn6t/Tol\n6QcmzsAmzvML79ctSdnp0eRKOwPfbO9J0Twh+JN2EPK/GTtS+OVWw2hHiWTaXrWp\n18XKYP3sVlZR/0RHBeRZyWU79H1AZi+nxL1obW4n15uWAkbzHIra3KhZe2+cg6JQ\noabKT/XInqRqkws6/wTpCpK+S7CMEKSB6txROhQk9z/TxTe8B5vnhpHI51FVgFPf\nHxGV3USqS3r+CfPXwNtmxl2uhv2De2MDvq5vs0HKjJr+z9CcEe+ZH0Ck+M4o0w6D\nKzy8vrhvAgMBAAECggEACPbemTJMCupgiA24R1/x6tEW/ypPFl52qlbtsFYDE0eg\nRQnXzgWX1JqBfGlmL5jGRA5nNvdKno46UmyDvRaAzjLHQoANdcAwfFPmJ8BWocvA\n4gJOb0mFYukd+3WREvOJT+MusJQ8MRFzSDMG9PczqtJOOTdxODvwkGSID7eJwPJQ\nl0k56Z8RpuvxJt/yTFV0YMrBGN8LbOnEqPK3EFy+K+F0T/R0XInvueoR4lMlnvYm\nEBjWEywEDfNuFav05oI0NZbbRMMu74zGFpnPF1PzdnMDp/4eAhGTBYh+hke9VY5g\nMLCXfwcK5p2Y6CAElApH0xfkqjY9Cfok+/YdQxXFwQKBgQDmti6ykDv4iU+nilZP\n8oPv3+tnhxRtTetK6LMTY4uATna9i9cSF7OAKwRE6MrNHPAzJlNE6smcXFnURqqu\no9Wqr5NTjRmHd8WhksoWZ+DQI3KIHqlSz7iUMbu4ZE6exFLwe0dxPBfdkZEKEitd\n2EZMNkqDAAtLz3zIjdOLFg8/FwKBgQDi4FFkR6chN6H2aHhsOf7Su1isPpxSI9eE\nqXFdyfoqWBhxBSew0qrEbcw7YsagAlUYianPlriGk49mOeKXmvKe6b+cO7RGWxUS\nOGJBDDcgzRJB1wXPs16ppdHbcz1kzvu+hn7TRY5j1lb1+6WS1XqDqiHb/JOHy1Ut\niXCIFdfoaQKBgQCbTJkkg6iKxUtEGP++sx2S06TvPGNIrIGtG/SnIYPe63JMZxxv\nxlqC9PHbvOP+q/MYSz0UEAOEaDnjhWoRQqFqUuOWA03i/YGgIGI+MNCI6sOG0zTh\nVIgH4W5eUc8GWlsGG8XceDoMYJdEMzTT5+hyFr2Tbu0rq9BwY9+5KTE8IwKBgQCM\nR3rL8GnsZgOk4g+ji3B+SAyZ49SwDS1S/5nzDdG6oOHr7+4MrRWdgu5GwdpiUU7g\nby4qBt1tiIuf/6aVat8dVxZ8uYXMAsFSlL5bzfvAMkxZnWQgep3Lc5YAhI6vaDPM\nKEj+xQE3xe3bBo/n7EtmYamx5cgqrJSsJVEJM8heEQKBgHxAzgUPoSJAUSL7/wuP\nlT5p4p9XAej+n0NzkdgBp106BJOW2YRTcvwsfxw5UMsIBrP7AwMpvqvBBvtUt3md\n+dIyS4u/lremsvS1ob5NqHAk+YvdNz2KC3rtRQXsOPNpFw4plwixQgknW7z7vot0\nemE6sUj4guvhynDkkKP6Q4D5\n-----END PRIVATE KEY-----\n", \
            "client_email": "firebase-adminsdk-ezndz@elcocinillas-93ebe.iam.gserviceaccount.com", \
            "client_id": "112436346824234695452", \
            "auth_uri": "https://accounts.google.com/o/oauth2/auth", \
            "token_uri": "https://oauth2.googleapis.com/token", \
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs", \
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ezndz%40elcocinillas-93ebe.iam.gserviceaccount.com", \
            "universe_domain": "googleapis.com" \
            }' > /code/api/src/database/elcocinillas.json

CMD ["uvicorn", "--app-dir=/code/api/src", "main:app", "--host", "0.0.0.0", "--port", "80"]