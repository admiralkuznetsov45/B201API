# Membuat data baru

Memberikan data baru

**URL** : `/aliens`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : None

**Data example** Tidak semua field harus diberikan, jika salah satu field kosong maka akan berisi string kosong

```json
{
        "title": "Buku Matematika",
        "authors": "Dawe",
        "average_rating": 4.49,
        "isbn": "0439353078",
        "isbn13": 9780449358071,
        "language_code": "ind",
        "  num_pages": 872,
        "ratings_count": 2133167,
        "text_reviews_count": 49221,
        "publisher": "PT Maju Mundur"
    }
```

## Success Response

**Kondisi** : Jika data berhasil terkirim

**Code** : `200 OK`

**Content example** :

```json
{
    "_id": "607329d31b328016ef72fa17",
    "title": "Buku Matematika",
    "isbn": "0439353078",
    "average_rating": 4.49,
    "isbn13": 9780449358071,
    "language_code": "ind",
    "ratings_count": 2133167,
    "publisher": "PT Maju Mundur",
    "__v": 0
}
```