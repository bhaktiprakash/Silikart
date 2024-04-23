const express = require('express')

const{
    addStudent,
    allStudentsInfo,
    getStudentById,
    updateStudent,
    deleteStudent,
    allDetails,
    insertBoth
} = require('../controller/studentInfo.controller')

const studentInfoRouter = express.Router()

studentInfoRouter.get("/details", allDetails)
studentInfoRouter.get("/", allStudentsInfo)
studentInfoRouter.post("/", addStudent)
studentInfoRouter.get("/:roll", getStudentById)
studentInfoRouter.put("/:roll", updateStudent)
studentInfoRouter.delete("/:roll", deleteStudent)
studentInfoRouter.post("/insertBoth", insertBoth)

module.exports = studentInfoRouter