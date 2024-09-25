var express = require('express');
var router = express.Router();
const Trip = require("../models/trips")
const moment =require('moment')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get("/", (req, res) => {
//     Trip.find({departure: {$regex: new RegExp(req.body.departure,"i")} , arrival :{$regex: new RegExp(req.body.arrival,"i")}})
//     .then((data) => res.json({ result : true , data }));
// })

// router.get("/", (req, res) => {
//     Trip.find()
//     .then((allTrip) => res.json(allTrip));
// })

router.get("/:departure/:arrival/:date", (req, res) => {

    const dateStart = moment.utc(req.params.date).startOf("day").toDate();
    const dateEnd = moment.utc(req.params.date).endOf("day").toDate();

    if(!req.params.departure ||!req.params.arrival||!req.params.date){
    return res.status(400).json({message:`les paramètre "departure","arrival" et "date" sont repris`})
}

Trip.find({departure: {$regex: new RegExp(req.params.departure,"i")}, 
            arrival:{$regex: new RegExp(req.params.arrival,"i")},
            date:{$gte:dateStart,$lte:dateEnd}
        })
        .lean()
        .then((data) => {
          // console.log(data);
          if (data.length > 0) {
            const tripsDate = data.map((obj) => {
              return {
                ...obj,
                time: moment.utc(obj.date).format('H:mm'),
              };
            });
    
        if (tripsDate == []) {
          return res.json({
            result: false,
            error: 'Date not found for this trip',
          });
        } else {
          return res.json({ result: true, trips: tripsDate });
        }
      } else {
        return res.json({ result: false, error: 'Trip not found' });
      }
    });
    });

//route pour book : 

router.post("/", (req, res) => {
    Trip.findOne({departure: {$regex: new RegExp(req.body.departure,"i")} , arrival :{$regex: new RegExp(req.body.arrival,"i")}, date:{}})
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