const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    user_id: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student' 
    },
    products: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    total_price: {
        type: Number,
    },
    status: { 
        type: Boolean, 
        default: false 
    }
});

const Order = mongoose.model('Order', orderSchema);
