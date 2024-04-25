const express = require('express')

const {
    addProduct,
    allProducts,
    getProductById,
    updateProduct,
    deleteProduct
} = require('../controller/product.controller')

const productRouter = express.Router()

productRouter.get("/", allProducts)
productRouter.get("/:roll", getProductById)
productRouter.post("/", addProduct)
productRouter.put("/:roll", updateProduct)
productRouter.delete("/:roll", deleteProduct)


module.exports = productRouter