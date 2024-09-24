const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    departure :String, 
    arrival :String, 
    date :{ type: Date},
    price :Number
});

const Book = mongoose.model('booking', bookSchema);

module.exports = Book ;
