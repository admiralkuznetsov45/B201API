# Dokumentasi REST API

API dibuat menggunakan NodeJS [https server](https://nodejs.org/api/https.html). Hanya menerima request body berupa [JSON](https://www.json.org/json-en.html), dan merespon dengan JSON.

## Endpoint terbuka

Endpoint ini tidak memerlukan Autentikasi

* [Login](login.md) : `POST /users/login`
* [Register](register.md) : `POST /users/register`

## Endpoint yang memerlukan autentikasi

Endpoint ini memerlukan token yang valid yang diletakkan pada header dari request. Token didapatkan dari endpoint login. Token yang digunakan adalah JWT.

### Hal yang bisa dilakukan pada Data

Endpoint yang berkaitan dengan data non user. Setiap endpoint membutuhkan token . Dan token ini mesti diupdate setiap 20 menit dengan cara login lagi

* [Get All Data](data/getAll.md) : `GET /aliens`
* [Get Data by ID](data/getId.md) : `GET /aliens/:id`
* [Create data](data/post.md) : `POST /aliens`
* [Update data](data/patch.md) : `PATCH /aliens/:id`
* [Delete data](data/deleteID.md) : `DELETE /:id`