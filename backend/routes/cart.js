const router = require("express").Router();
const Mongoose = require("mongoose");
const User = require("../models/User.model");

//CART ADD
router.route("/").get((req, res) => {
  const user = Mongoose.Types.ObjectId(req.body.user);
  const course = Mongoose.Types.ObjectId(req.body.course);
  User.find({ _id: user })
    .then((doc) => {
      res.status(200).json(doc[0].cart);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

//CART ADD
router.route("/").post((req, res) => {
  const user = Mongoose.Types.ObjectId(req.body.user);
  const course = Mongoose.Types.ObjectId(req.body.course);
  User.updateOne({ _id: user }, { $addToSet: { cart: course } })
    .then((doc) => {
      res.status(200).json({
        message: `Item added to  cart!`,
      });
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

//CART DELETE
router.route("/").delete((req, res) => {
  const user = Mongoose.Types.ObjectId(req.body.user);
  const course = Mongoose.Types.ObjectId(req.body.course);
  User.updateOne({ _id: user }, { $pullAll: { cart: [course] } })
    .then((doc) => {
      res.status(200).json({
        message: `Item removed from cart!`,
      });
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
