# Delete User's Account

Hapus salah satu data dengan id yang diberikan

**URL** : `/aliens/:id`

**URL Parameters** : `id=[hex string]` dimana `id` adalah id dari data yang mau dihapus

**Method** : `DELETE`

**Auth required** : YES

**Data** : `{}`

## Success Response

**Kondisi** : Jika data ada

**Code** : `200 OK`

**Content** : `{}`

```json
{
    "n": 1,
    "opTime": {
        "ts": "6949930574454718468",
        "t": 2
    },
    "electionId": "7fffffff0000000000000002",
    "ok": 1,
    "$clusterTime": {
        "clusterTime": "6949930574454718468",
        "signature": {
            "hash": "WbpcGm+WW6wJebgshx/AtRLEvdQ=",
            "keyId": "6945494968454610948"
        }
    },
    "operationTime": "6949930574454718468",
    "deletedCount": 1
}
```