const router = require("express").Router();
const Mongoose = require("mongoose");
const User = require("../models/User.model");
const Course = require("../models/Course.model");
const Instructor = require("../models/Instructor.model");
const Analytics = require("../models/Analytics.model");
const Sold = require("../models/Sold.model");

//BUY
router.route("/").post(async (req, res) => {
  const user = req.body.user;
  const course = req.body.course;
  var query = {};
  for (var key in req.query) {
    query[key] = new RegExp(`${req.query[key]}`, "i");
  }
  var currentTime = new Date();

  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();
  const user1 = await User.findOne({ _id: user });
  if (user1) {
    user1.subscriber = true;
    await user1.save();
    const course1 = await Course.findOne({ _id: course });
    if (course1) {
      const ammount = Number(course1.price);
      const instructor = course1.instructor;

      const Analytic = await Analytics.findOne({
        _id: "5fdb01d70379f5528c7f8928",
      });
      if (Analytic) {
        Analytic.sold = Analytic.sold + 1;
        await Analytic.save();
      }

      const instructor1 = await Instructor.findOne({ _id: instructor });

      if (instructor1) {
        instructor1.sold = instructor1.sold + 1;

        let instructor_earning = ammount - (instructor1.percentage * ammount) / 100;
        instructor1.earnings = instructor1.earnings + instructor_earning;
        await instructor1.save();
        Sold.findOneAndUpdate(
          { courseId: course },
          {
            $inc: { sold: 1, ammount: instructor_earning },
            $push: {
              dateTime: `${currentTime.getDate()}/${currentTime.getMonth()}/${currentTime.getFullYear()}`,
              user: user,
            },
          },
          { useFindAndModify: false }
        )
          .then((doc) => {
            if (doc) {
              res.status(200).json(`Course purchase Successfully!`);
            } else {
              const newSold = new Sold({
                courseId: course,
                user,
                dateTime: `${currentTime.getDate()}/${currentTime.getMonth()}/${currentTime.getFullYear()}`,
                ammount: instructor_earning,
                instructor,
              });
              newSold
                .save()
                .then(() => {
                  res.status(200).json(`Course purchase Successfully!`);
                })
                .catch((err) => {
                  throw err;
                });
            }
          })
          .catch((err) => {
            throw err;
          });
      }


    }
  } else {
    res.status(404).json(`Course purchase Failed!`);
  }

  /* .catch((err) => res.status(400).json("Error: " + err)); */
});

module.exports = router;
