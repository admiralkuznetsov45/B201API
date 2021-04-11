# Update Data

Update data dengan id yang diberikan, namun tidak semua field dibutuhkan

**URL** : `/aliens/:id`

**Method** : `PATCH`

**Auth required** : YES

**Permissions required** : None

**Data example** Tidak semua field dibutuhkan, yang diupdate hanya field yang diberikan

```json
{
    "title": "Buku Matematika"      
}
```

## Success Responses

**Kondisi** : Update berhasil

**Code** : `200 OK`

**Content example** :

```json
{
    "_id": "6065c9740430bd3bdcc82578",
    "title": "Buku Matematika",
    "authors": "Gary Colombo/Bonnie Lisle",
    "average_rating": 3.77,
    "isbn": "0312405545",
    "isbn13": 9780312405540,
    "language_code": "eng",
    "  num_pages": 826,
    "ratings_count": 44,
    "text_reviews_count": 3,
    "publisher": "Bedford Books"
}
```