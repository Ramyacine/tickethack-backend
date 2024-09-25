var express = require('express');
var router = express.Router();
const Trip = require("../models/trips")
const Cart = require("../models/carts")
const Book  = require("../models/booking")

//validation pour les mettres dans booking 
router.post("/", (req, res) => {
     Cart.find()
    .then(alltrip=> {
        for(const trip of alltrip){

         const newbook = new Book({
            departure :trip.departure, 
            arrival :trip.arrival, 
            date :trip.Date,
            price :trip.price
        });
            newbook.save()
        }})

     .then(() =>{
     Book.find()
     .then((data) => {
     res.json({ result: true ,data})
    })
    })
})


// efface un voyage:
router.delete("/:id", (req, res) => {
Cart.findByAndDelete(req.params.id)
    .then(() => {
    Cart.find()
    .then((data) => {
        res.json({result :true, cart: data})
       })
}
)
})

module.exports = router;