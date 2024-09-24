const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    id:{ type: mongoose.Schema.Types.ObjectId, ref: 'trips'},
    departure :String, 
    arrival :String,
    date :{ type: Date},
    price :Number
});

const Cart = mongoose.model('carts', cartSchema);

module.exports = Cart ;
