var express = require('express');
var router = express.Router();
const Trip = require("../models/trips")
//const moment =require('moment')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get("/", (req, res) => {
    Trip.find({departure: {$regex: new RegExp(req.body.departure,"i")} , arrival :{$regex: new RegExp(req.body.arrival,"i")}})
    .then((data) => res.json({ result : true , data }));
})

// router.get("/", (req, res) => {
//     Trip.find()
//     .then((allTrip) => res.json(allTrip));
// })

// router.get("/", (req, res) => {
//     Trip.find({departure: req.body.departure , arrival: req.body.arrival})
//     .then((data) => res.json(data));
// })

// if(!req.params.departure ||!req.params.arrival||!req.params.date){
//     return res.status(400).json({message:`les paramètre "departure","arrival" et "date" sont repris`})
// }

// router.get("/", (req, res) => {
// Trip.find({departure: req.body.departure , arrival: req.body.arrival})
// .then((data) => res.json({ result : true , data }))
// })

//route pour book : 

router.post("/", (req, res) => {
    Trip.findOne({departure: {$regex: new RegExp(req.body.departure,"i")} , arrival :{$regex: new RegExp(req.body.arrival,"i")}})
    .then(data => {

    const newCart = new Cart({
        departure :data.departure, 
        arrival :data.arrival, 
        date :data.Date,
        price :data.price
    });
        newCart.save()
        .then(newdoc => {
            res.json({ result: true ,newdoc})
        })
    })
})


module.exports = router;