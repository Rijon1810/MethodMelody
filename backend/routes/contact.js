const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const Contact = require("../models/Contact.model");
const Mongoose = require("mongoose");
const { query } = require("express");

router.route("/getAll").get((req, res) => {
  Contact.find()
    .then((contact) => res.json(contact))
    .catch((err) => res.status(400).json("Error: " + err));
});

//add single contact
router.route("/").post((req, res) => {
  const name = req.body.name;
  const from = req.body.from;
  const to = req.body.to;
  const email = req.body.email;
  const message = req.body.message;
  const newContact = new Contact({
    name,
    from,
    to,
    email,
    message,
  });
  newContact
    .save()
    .then(() => {
      res.status(200).json({
        message: `New Message Added Successfully!`,
        id: newContact._id,
      });
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

//Search
router.route("/search").get((req, res) => {
  var query = {};
  for (var key in req.query) {
    query[key] = new RegExp(`${req.query[key]}`, "i");
  }
  Contact.find(query)
    .then((doc) => {
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json(doc);
      }
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

//UPDATE REPLY by ID
router.route("/:contactId").put((req, res) => {
  const contactId = Mongoose.Types.ObjectId(req.body.contactId);
  const reply = req.body.reply;
  Contact.findByIdAndUpdate(
    contactId,
    { $addToSet: { reply: reply } },
    { useFindAndModify: false }
  )
    .then((doc) => {
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json(doc);
      }
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

//GET by USERID
router.route("/:who/:userId").get((req, res) => {
  let query = {};
  query[req.params.who] = Mongoose.Types.ObjectId(req.params.userId);
  console.log(query);
  Contact.find(query)
    .sort({ updatedAt: "asc" })
    .then((doc) => {
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json(doc);
      }
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

//DELETE by ID
router.route("/:contactId").delete((req, res) => {
  const id = req.params.contactId;
  Contact.findByIdAndDelete(id)
    .then((result) => {
      res.status(200).json(`${result} Successfully!`);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
