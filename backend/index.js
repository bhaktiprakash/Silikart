const express = require('express')
const dbConnect = require('./db/db')
const studentInfoRouter = require('./router/studentInfo.router')
const studentAcademicRouter = require('./router/studentAcademic.router')

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/studentInfo", studentInfoRouter)
app.use("/studentAcademic", studentAcademicRouter)


app.get("/", (req, res)=>{
    res.send("Hello Buddy!!!")
})


dbConnect()
app.listen(5000, ()=>console.log("http://localhost:5000"))