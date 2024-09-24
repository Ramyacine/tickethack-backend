var express = require('express');
var router = express.Router();
const Trip = require("../models/trips")

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get("/", (req, res) => {
//     Trip.find()
//     .then((allTrip) => res.json(allTrip));
// })

router.get("/", (req, res) => {
    Trip.find()
    .then((data) => res.json(data));
})

router.post("/", (req, res) => {
    if(departure === req.body.departure && arrival === req.body.arrival && departure !=arrival){
    Trip.find({departure: {$regex: new RegExp(req.body.departure,"i")} , arrival :{$regex: new RegExp(req.body.arrival,"i")}})
    .then((data) => res.json({ result : true , data }));
    }else{
        res.json({result : false})
    }
})


module.exports = router;