const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student' 
    },
    products: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    totalPrice: {
        type: Number,
    },
    status: { 
        type: Boolean, 
        default: false 
    }
});

const Order = mongoose.model('Order', orderSchema);


module.exports = Order