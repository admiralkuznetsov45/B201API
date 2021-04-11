# Show Data

Memberikan data tertentu yang ingin ditampilkan

**URL** : `/aliens/:id`

**Method** : `GET`

**Auth required** : YES

**Data constraints** : `{}`


## Success Responses

**Condition** : User dapat menghapuskan data yang diinginkan

**Code** : `200 OK`

**Content** :

```json
[
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
]
```