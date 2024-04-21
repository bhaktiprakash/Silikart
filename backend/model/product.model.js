const mongoose = require('mongoose')

const studentAcademicSchema = new mongoose.Schema({
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
    }
    
})

const studentAcademic = mongoose.model("studentAcademic", studentAcademicSchema)
module.exports = studentAcademic