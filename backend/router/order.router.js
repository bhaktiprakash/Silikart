const express = require('express')

const {
    placeOrder,
    getOrders,
    getAllOrders
} = require('../controller/order.controller')

const orderRouter = express.Router()

orderRouter.post('/', placeOrder)
orderRouter.get('/', getAllOrders)
orderRouter.get('/:userId', getOrders)

module.exports = orderRouter
