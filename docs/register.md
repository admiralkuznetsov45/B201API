# Register

Digunakan untuk mendaftarkan user baru, password di enkripsi menggunakan bcrypt.

**URL** : `/users`

**Method** : `POST`

**Auth required** : NO

**Data constraints** :

```json
{
    "username": "[username in text]",
    "password": "[password in plain text]"
}
```

**Data example** :

```json
{
    "username": "tukangsate",
    "password": "bebekpanggang"
}
```

## Success Response

**Content example** :

```json
{
    "_id": "6069e57172a4a85145c41dea",
    "username": "tukangsate",
    "password": "$2b$13$PFFwTffffu0Jszb8K7bd/mmNH.141VpDgpY8j5i6i",
    "__v": 0
}
```

