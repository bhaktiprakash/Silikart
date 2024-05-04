const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const student = require('../model/student.model');

async function allStudentsInfo(req, res){
    try {
        let students = await student.find()
        res.status(200).json(students)
    } catch (error) {
        console.log(error);
        res.status(500).json({"message": error.message})
    }
}

async function addStudent(req,res){
    try {
        let {name, sic, email, password}  = req.body
        const existingStudent = await student.findOne({ sic: sic });
        if (existingStudent) {
            return res.status(400).json({ message: "Student with this SIC already exists" });
        }
        const salt = await bcrypt.genSalt(10)
        password = await bcrypt.hash(password, salt)
        let newStudent = await student.create({name, sic, email, password})

        // let newStudent = await student.create(req.body)
        res.status(201).json(newStudent)
    } catch (error) {
        console.log(error);
        res.status(400).json({"message": error.message})
    }
}

async function loginStudent(req, res) {
    try {
        const { email, password } = req.body

        let user = await student.findOne({ email: email })
        if (!user) {
            return res.status(404).json({ message: 'Invalid Email' })
        }
        let isPasswordValid = await bcrypt.compare(password, user.password)
        if (isPasswordValid) {
            // const token = jwt.sign(
            //     {user: {id: user._id, name: user.name, email: user.email}},
            //     process.env.JWT_SECRET
            // )
            res.status(200).json({ message: 'Login Successfully'})
        } else {
            res.status(400).json({ message: 'Invalid Password' })
        }
    } catch (error) {
        console.log(error);
    }
}

async function updateStudent(req, res){
    try {
        let { roll } = req.params
        let data = req.body
        let student = await student.findOneAndUpdate({rollno: roll}, data, {new: true})
        res.status(200).json(student)
    } catch (error) {
        console.log(error);
        res.status(500).json({"message": error.message})
    }
}

async function deleteStudent(req, res){
    try {
        let { roll } = req.params
        let student = await student.findOneAndDelete({rollno: roll})
        res.status(200).json(student)
    } catch (error) {
        console.log(error);
        res.status(500).json({"message": error.message})
    }
}

module.exports = {
    addStudent,
    allStudentsInfo,
    updateStudent,
    deleteStudent,
    loginStudent
}