A learning project to familiarize myself with Python and React.

##Requirements
Here is the setup used for develop. It would probably work with other versions too, but it was not tested.

* Python 3.5
* Django 1.8.6
* psycopg2 (from [here](http://www.lfd.uci.edu/~gohlke/pythonlibs/#psycopg))
* PostgresSQL 9.4

##Installation

Create PostgreSQL user:

```sh
createuser personal_library
createdb -O personal_library personal_library
```

Migrate database schemas:

```sh
python manage.py migrate
```

Start application:

python manage.py runserver 8686

Then navigate to [main page](http://www.localhost:8686/main/)
