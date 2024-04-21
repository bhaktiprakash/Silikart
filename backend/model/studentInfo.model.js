const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sic: {
        type: String,
        required: true,
        unique: true
    },
    yearOfAdm: {
        type: String,
        required: true,
        unique: true
    },
    branch: {
        type: String,
        required: true
    }
})

const studentInfo = mongoose.model("studentInfo", studentSchema)
module.exports = studentInfo