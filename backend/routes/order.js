const router = require("express").Router();
const Order = require("../models/Order.model");
const Mongoose = require("mongoose");

//create a order 
router.route("/").post( (req, res) => {
  const {
    userId,
    paid,
    amount,
    courses,
  } = req.body

    const order = new Order({
      userId:userId,
      paid: paid,
      amount:amount,
      courses:courses,
    })

     order.save().then((order) => res.json(order))
    .catch((err) => res.status(400).json("Error: " + err));

  

});

router.route("/list").get((req, res) => {
  Order.find({})
    .then((doc) => {
      if (doc) {
    //    console.log(doc);
        res.status(200).json(doc);
      } else {
        res.status(404).json(doc);
      }
    })
    .catch((err) => res.status(500).json("Error: " + err));
});
module.exports = router;
