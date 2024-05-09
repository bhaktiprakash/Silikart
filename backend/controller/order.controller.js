const mongoose = require('mongoose');
const order = require('../model/order.model')

async function placeOrder(req, res) {
    try {
        console.log(req.body);
        let newOrder = await order.create(req.body)
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

    
async function getOrders(req, res) {
    try {
      const orders = await order.find({ userId: req.params.userId });
      console.log(orders);
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}
  
module.exports = {
    placeOrder,
    getOrders
}