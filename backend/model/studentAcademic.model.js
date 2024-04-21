const mongoose = require('mongoose')

const studentAcademicSchema = new mongoose.Schema({
    rollno: {
        type: Number,
        required: true,
        unique: true
    },
    program: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    cgpa: {
        type: String,
        required: true
    }
    
})

const studentAcademic = mongoose.model("studentAcademic", studentAcademicSchema)
module.exports = studentAcademic