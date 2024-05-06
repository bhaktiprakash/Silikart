const express = require('express')

const {
    placeOrder,
    getOrders
} = require('../controller/order.controller')

const orderRouter = express.Router()

orderRouter.post('/', placeOrder)
orderRouter.get('/:userId', getOrders)

module.exports = orderRouter
