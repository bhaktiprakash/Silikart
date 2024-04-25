const mongoose = require('mongoose');

const product = require('../model/product.model')

async function addProduct(req,res){
    try {
        let newProduct = await product.create(req.body)
        res.status(201).json(newProduct)
    } catch (error) {
        console.log(error);
        res.status(400).json({"message": error.message})
    }
}

async function allProducts(req, res){
    try {
        let products = await product.find()
        res.status(200).json(products)
    } catch (error) {
        console.log(error);
        res.status(500).json({"message": error.message})
    }
}

async function getProductById(req, res){
    try {
        let { serial } = req.params
        console.log(req.params);
        let products = await product.find({serial: serial})
        if(products.length >0){
            res.status(200).json(products)
        } else {
            res.status(404).json({"message": "Data not found"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"message": error.message})
    }
}

async function updateProduct(req, res){
    try {
        let { serial } = req.params
        let data = req.body
        let products = await product.findOneAndUpdate({serial: serial}, data, {new: true})
        res.status(200).json(products)
    } catch (error) {
        console.log(error);
        res.status(500).json({"message": error.message})
    }
}

async function deleteProduct(req, res){
    try {
        let { serial } = req.params
        let product = await product.findOneAndDelete({serial : serial})
        res.status(200).json(product)
    } catch (error) {
        console.log(error);
        res.status(500).json({"message": error.message})
    }
}

module.exports = {
    addProduct,
    allProducts,
    getProductById,
    updateProduct,
    deleteProduct

}