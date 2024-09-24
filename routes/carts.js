var express = require('express');
var router = express.Router();
const Trip = require("../models/trips")
const Cart = require("../models/carts")
const Book  = require("../models/booking")

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post("/", (req, res) => {
    const {id} = req.body
    Cart.find()
    .populate('trips')
    .then(() => res.json({ result: true ,Cart}))
})


module.exports = router;