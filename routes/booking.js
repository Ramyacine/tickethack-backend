var express = require('express');
var router = express.Router();
const Trip = require("../models/trips")
const Cart = require("../models/carts")
const Book  = require("../models/booking")

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


router.delete("/delete", (req, res) => {
    const {trip} = req.body
    Trip.deleteOne({trip})
    .populate('trips')
    .then((data) => {
    return res.json({ result: true, data})
    
})
});

module.exports = router;