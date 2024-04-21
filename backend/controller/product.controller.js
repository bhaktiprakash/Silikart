const mongoose = require('mongoose');

const product = require('../model/product.model')

async function addStudent(req,res){
    try {
        let newStudent = await product.create(req.body)
        res.status(201).json(newStudent)
    } catch (error) {
        console.log(error);
        res.status(400).json({"message": error.message})
    }
}

async function allStudentsInfo(req, res){
    try {
        let students = await product.find()
        res.status(200).json(students)
    } catch (error) {
        console.log(error);
        res.status(500).json({"message": error.message})
    }
}

async function getStudentById(req, res){
    try {
        let { roll } = req.params
        console.log(req.params);
        let student = await product.find({rollno: roll})
        if(student.length >0){
            res.status(200).json(student)
        } else {
            res.status(404).json({"message": "Data not found"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message": error.message})
    }
}

async function updateStudent(req, res){
    try {
        let { roll } = req.params
        let data = req.body
        let student = await product.findOneAndUpdate({rollno: roll}, data, {new: true})
        res.status(200).json(student)
    } catch (error) {
        console.log(error);
        res.status(500).json({"message": error.message})
    }
}

async function deleteStudent(req, res){
    try {
        let { roll } = req.params
        let student = await product.findOneAndDelete({rollno: roll})
        res.status(200).json(student)
    } catch (error) {
        console.log(error);
        res.status(500).json({"message": error.message})
    }
}

module.exports = {
    addStudent,
    allStudentsInfo,
    getStudentById,
    updateStudent,
    deleteStudent

}