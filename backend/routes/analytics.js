const router = require("express").Router();
const Analytics = require("../models/Analytics.model");
const Instructor = require("../models/Instructor.model");
const Course = require("../models/Course.model");
const Mongoose = require("mongoose");

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

//GET by ID
router.route("/:instructorId").get((req, res) => {
  const id = Mongoose.Types.ObjectId(req.params.instructorId);
  Instructor.findById(id)
    .then((doc) => {
      if (doc) {
        darraysas = [];
        doc.course.forEach((item, index) => {
          console.log(item);
          courseId = Mongoose.Types.ObjectId(item);
          Course.findById(courseId).then((data) => {
            darraysas.push({ courseID: courseId, sold: data.sold });
          });
        });
        res.status(200).json({
          earning: doc.earnings,
          sold: doc.sold,
          individual: darraysas,
        });
      } else {
        res.status(404).json(doc);
      }
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
