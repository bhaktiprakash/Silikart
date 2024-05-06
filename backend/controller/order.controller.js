const order = require('../model/order.model')
async function placeOrder(req, res) {
    try {
        // const { user_id, products, total_price } = req.body;
        // const order = new Order({ user_id, products, total_price });
        let newOder = await order.create(req.body)        
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

    
async function getOrders(req, res) {
    try {
      const orders = await order.find({ user_id: req.params.userId });
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}
  
module.exports = {
    placeOrder,
    getOrders
}