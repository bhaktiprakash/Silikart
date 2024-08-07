const express = require('express')
const cors = require('cors')
const dbConnect = require('./db/db')
const productRouter = require('./router/product.router')
const studentRouter = require('./router/student.router')
const orderRouter = require('./router/order.router')

const app = express()
require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/product", productRouter)
app.use("/student", studentRouter)
app.use("/order", orderRouter)

app.get("/", (req, res)=>{
    res.send("Hello there!!! Welcome to Silikart")
})


dbConnect()
app.listen(5000, ()=>console.log("http://localhost:5000"))