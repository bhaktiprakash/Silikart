const express = require('express')

const{
    addStudent,
    allStudentsInfo,
    loginStudent,
    studentProfile
} = require('../controller/student.controller')

const authenticateStudent = require('../middleware/auth.middleware')

const studentRouter = express.Router()

studentRouter.get("/", allStudentsInfo)
studentRouter.post("/signup", addStudent)
studentRouter.post("/signin", loginStudent)
studentRouter.get("/profile", authenticateStudent, studentProfile)

module.exports = studentRouter