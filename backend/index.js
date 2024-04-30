const express = require('express')
const cors = require('cors')
const dbConnect = require('./db/db')
const productRouter = require('./router/product.router')
// const studentAcademicRouter = require('./router/product.router')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/product", productRouter)
// app.use("/studentAcademic", studentAcademicRouter)


app.get("/", (req, res)=>{
    res.send("Hello there!!! Welcome to Silikart")
})


dbConnect()
app.listen(5000, ()=>console.log("http://localhost:5000"))