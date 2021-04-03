const router = require("express").Router();
const Mongoose = require("mongoose");
const User = require("../models/User.model");

//wishList GET
router.route("/:userId").get((req, res) => {
  const user = Mongoose.Types.ObjectId(req.params.userId);
  User.find({ _id: user })
    .then((doc) => {
      res.status(200).json(doc[0].referralCode);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

//wishList ADD
router.route("/").post((req, res) => {
  const user = Mongoose.Types.ObjectId(req.body.user);
  const referral = req.body.referral;
  const price = parseFloat(req.body.price);

  User.find({ _id: user })
    .then((doc) => {
      if (doc[0].course.length === 0) {
        User.find({ referralCode: referral })
          .then((doc) => {
            refBonus = doc[0].referralBonus;
            if (doc[0] == null) {
              res.status(200).json("Wrong Referral Code");
            } else {
              if (doc[0]._id == user.toHexString()) {
                res.status(200).json("cant use your own referral !! Really !!");
              } else {
                refBonus = parseFloat(
                  parseFloat(refBonus) + (20 * price) / 100
                );
                User.findOneAndUpdate(
                  { _id: doc[0]._id },
                  {
                    $set: {
                      referralBonus: refBonus,
                    },
                  },
                  {
                    useFindAndModify: false,
                  }
                )
                  .then((doc) => {
                    //console.log(doc);
                    res
                      .status(200)
                      .json(parseFloat(price - (10 * price) / 100));
                  })
                  .catch((err) => res.status(400).json("Error: " + err));
                // res.status(200).json(parseFloat(price - (10 * price) / 100));
              }
            }
          })
          .catch((err) => res.status(400).json("Error: " + err));
      } else {
        res.status(200).json("Not Eligible");
      }
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
