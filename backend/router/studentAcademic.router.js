const express = require('express')

const {
    addStudent,
    allStudentsInfo,
    getStudentById,
    updateStudent,
    deleteStudent
} = require('../controller/studentAcademic.controller')

const studentAcademicRouter = express.Router()

studentAcademicRouter.get("/", allStudentsInfo)
studentAcademicRouter.get("/:roll", getStudentById)
studentAcademicRouter.post("/", addStudent)
studentAcademicRouter.put("/:roll", updateStudent)
studentAcademicRouter.delete("/:roll", deleteStudent)


module.exports = studentAcademicRouter