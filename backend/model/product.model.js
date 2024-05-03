const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    serial: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    availability: {
        type: Boolean,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    details: {
        duration: {
            type: Number,
        },
        description: {
            type: String,
        },
        howToUse: {
            type: String,
        },
        whereToUse: {
            type: String
        }
    }
})

const product = mongoose.model("product", productSchema)
module.exports = product