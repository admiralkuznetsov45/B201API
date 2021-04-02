//template untuk collection alien
const mongoose = require('mongoose')

const alienSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        max:100
    },
    author: {
        type: String,
        required: false,
        max:100,
    },

    isbn: {
        type: String,
        required: false,
        max:50,
    },

    average_rating: {
        type: Number,
        required: false,
        max:100,
    },

    num_pages: {
        type: Number,
        required: false,
    },

    isbn13: {
        type: Number,
        required: false,
    },

    text_review_count: {
        type: Number,
        required: false,
    },

    language_code: {
        type: String,
        required: false,
    },

    ratings_count: {
        type: Number,
        required: false,
    },

    publisher: {
        type: String,
        required: false,
    },
 })

 module.exports = mongoose.model('Alien',alienSchema)