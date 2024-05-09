const express = require('express')

const {
    addProduct,
    allProducts,
    getProductById,
    updateProduct,
    deleteProduct
} = require('../controller/product.controller')
// const authenticate = require('../middleware/auth.middleware')

const productRouter = express.Router()

productRouter.get("/", allProducts)
productRouter.get("/:serial", getProductById)
productRouter.post("/",  addProduct)
productRouter.put("/:serial", updateProduct)
productRouter.delete("/:serial", deleteProduct)


module.exports = productRouter