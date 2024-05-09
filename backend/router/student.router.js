const express = require('express')

const{
    addStudent,
    allStudentsInfo,
    loginStudent
} = require('../controller/student.controller')

const studentRouter = express.Router()

studentRouter.get("/", allStudentsInfo)
studentRouter.post("/signup", addStudent)
studentRouter.post("/signin", loginStudent)

module.exports = studentRouter