var express = require('express');
var router = express.Router();
const Trip = require("../models/trips")
const Cart = require("../models/carts")
const Book  = require("../models/booking")
const moment =require('moment')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get("/",(req,res)=>{
    const date = moment.utc(req.params.date).endOf("day").toDate();
    console.log(date);

})

router.get("/", (req, res) => {
    Trip.find()
    .then((data) => res.json({ trips: data }));
});


// router.get("/", (req, res) => {
//     Cart.findByID(req.body.id)
//     .then(book => {
//     const newBook= new Book ({
//         departure :book.departure, 
//         arrival :book.arrival, 
//         date :book.Date,
//         price :book.price
//     })
//     newBook.save()
//     .then(() => res.json({ result: true ,newBook}))
// })
// });


module.exports = router;