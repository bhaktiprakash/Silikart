const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student' 
    },
    products: [{ 
        id : {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
        serial: {
            type: String,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
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