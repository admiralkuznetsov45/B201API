# Login

Digunakan untuk mendapat token bagi user yang sudah registrasi

**URL** : `/users/login`

**Method** : `POST`

**Auth required** : NO

**Data constraints** :

```json
{
    "username": "[alphanumeric and underscore characters ONLY]",
    "password": "[password in plain text]"
}
```

**Data example** :

```json
{
    "username": "ayambakar",
    "password": "12345"
}
```

## Success Response

**Code** : `200 OK`

**Content example** :

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYXlhbSIsImlhdCI6MTYxODE1MTkxNSwiZXhwIjoxNjE4MTUzMTE1fQ.LOPpoJKbOpeV-bf_onCCTF4ZgR2AWqo0JMR-_aK8e-A"
}
```

## Failed Response

```json
{
    "Not Allowed"
}
```