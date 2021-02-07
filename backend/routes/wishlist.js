const router = require("express").Router();
const Mongoose = require("mongoose");
const User = require("../models/User.model");

//wishList GET
router.route("/:userId").get((req, res) => {
  const user = Mongoose.Types.ObjectId(req.params.userId);
  User.find({ _id: user })
    .then((doc) => {
      res.status(200).json(doc[0].wishList);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

//wishList ADD
router.route("/").post((req, res) => {
  const user = Mongoose.Types.ObjectId(req.body.user);
  const course = Mongoose.Types.ObjectId(req.body.course);
  User.updateOne({ _id: user }, { $addToSet: { wishList: course } })
    .then((doc) => {
      res.status(200).json({
        message: `Item added to wishList!`,
      });
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

//wishList DELETE
router.route("/delete").post((req, res) => {
  const user = Mongoose.Types.ObjectId(req.body.user);
  const course = Mongoose.Types.ObjectId(req.body.course);
  User.updateOne({ _id: user }, { $pullAll: { wishList: [course] } })
    .then((doc) => {
      res.status(200).json({
        message: `Item removed from wishList!`,
      });
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

//remove all
router.route("/remove_all").post((req, res) => {
  const user = Mongoose.Types.ObjectId(req.body.user);
  User.findOneAndUpdate(
    { _id: user },
    { $set: { wishList: [] } },
    { useFindAndModify: false }
  )
    .then((doc) => {
      res.status(200).json({
        message: `Items removed from wishList!`,
      });
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
