const router = require("express").Router();
const Analytics = require("../models/Analytics.model");

router.route("/").get((req, res) => {
  Analytics.find()
    .then((analytics) => res.json(analytics))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/sold").post((req, res) => {
  Analytics.findByIdAndUpdate(
    { _id: "5fdb01d70379f5528c7f8928" },
    { $inc: { sold: 1 } },
    { useFindAndModify: false }
  )
    .then((doc) => {
      res.status(404).json(`Course purchase Failed!`);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
