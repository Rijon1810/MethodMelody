const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const multer = require("multer");
const path = require("path");
const Mongoose = require("mongoose");
const User = require("../models/User.model");
const { authentication, apiAuth } = require("../middleware/authentication");
const { registerValidation, loginValidation } = require("../validation");
const Analytics = require("../models/Analytics.model");
const Course = require("../models/Course.model");
let referralCodeGenerator = require("referral-code-generator");
const nodemailer = require("nodemailer");
const key = require("../key.json");

//const EMAIL_ADDRESS = "info@methodmelody.com";
const EMAIL_ADDRESS = "rokaiyaothoi@gmail.com";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join("storage", "photo"));
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const user = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 10 },
  fileFilter,
});

//confirmation
router.route("/timer").get((req, res) => {
  var currentTime = new Date();
  var endTime = new Date("2021-03-17");
  const diffTime = Math.abs(Date.parse(endTime) - Date.parse(currentTime));
  res.status(200).json(diffTime / 1000);
});

//confirmation
router.route("/confirmation/:token").get((req, res) => {
  try {
    const { id } = jwt.verify(req.params.token, process.env.SECRET_KEY);
    User.findByIdAndUpdate(
      id,
      { $set: { emailVerify: true } },
      { useFindAndModify: false }
    ).catch((err) => res.status(400).json("email not vefied: " + err));
    res.redirect("http://localhost:3000/login");
  } catch (err) {
    res.send("invalid signature");
  }
});

//GET by ID
router.route("/type/student").get((req, res) => {
  User.find({ type: 4, subscriber: false })
    .then((doc) => {
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json(doc);
      }
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

//GET by ID
router.route("/type/subscriber").get((req, res) => {
  User.find({ type: 4, subscriber: true })
    .then((doc) => {
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json(doc);
      }
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

//GET by ID
router.route("/type/:type").get((req, res) => {
  const type = req.params.type;
  User.find({ type: type })
    .then((doc) => {
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json(doc);
      }
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

//GET by ID
router.route("/:userId").get((req, res) => {
  const id = req.params.userId;
  User.findById(id)
    .then((doc) => {
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json(doc);
      }
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

//GET by TOKEN
router.route("/_ga/:token").get((req, res) => {
  const v_token = req.params.token;
  User.find({ v_token })
    .then((doc) => {
      if (doc < 1) {
        res.status(200).json({ status: "CREEP" });
      } else {
        res.status(200).json({ status: "OK" });
      }
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

//GET all user course
router
  .use(apiAuth)
  .route("/course")
  .post((req, res) => {
    const id = Mongoose.Types.ObjectId(req.body["id"]);
    User.find({ _id: id })
      .then((doc) => {
        if (doc) {
          const course_id = new Array();
          for (let index = 0; index < doc[0]["course"].length; index++) {
            course_id.push(doc[0]["course"][index][0]);
          }
          Course.find({
            _id: {
              $in: course_id,
            },
          })
            .then((docs) => {
              res.status(200).json(docs);
            })
            .catch((err) => res.status(400).json("Error: " + err));
        } else {
          res.status(404).json(doc);
        }
      })
      .catch((err) => res.status(400).json("Error: " + err));
  });

//LOGIN
router.route(`/login`).post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  User.find({ email })
    .then((docs) => {
      if (
        docs.length > 0 &&
        docs[0].suspend === false &&
        docs[0].emailVerify === true
      ) {
        bcrypt.compare(password, docs[0].password, (err, result) => {
          // if (err) {
          // 	return res.status(401).json({ message: "Auth failed!" });
          // }
          if (result) {
            jwt.sign(
              { email, password },
              process.env.SECRET_KEY,
              { expiresIn: "72h" },
              (err, token) => {
                User.findByIdAndUpdate(
                  docs[0]._id,
                  { $set: { v_token: token } },
                  { useFindAndModify: false }
                ).catch((err) => res.status(400).json("v_token error: " + err));
                res.header("auth-token", token);
                return res.status(200).json({
                  id: docs[0]._id,
                  type: docs[0].type,
                  course: docs[0].course,
                  previousCourse: docs[0].previousCourse,
                  name: docs[0].name,
                  photo: docs[0].photo,
                  age: docs[0].age,
                  phone: docs[0].phone,
                  dob: docs[0].dob,
                  address: docs[0].address,
                  email: docs[0].email,
                  instructor: docs[0].instructor,
                  cart: docs[0].cart,
                  referralCode: docs[0].referralCode,
                  studentId: docs[0].studentId,
                  createdAt: docs[0].createdAt,
                  updatedAt: docs[0].updatedAt,
                  v_token: docs[0].v_token,
                });
              }
            );
          } else {
            return res.status(401).json({
              message: "Authentication Failed !!!",
            });
          }
        });
      } else {
        return res.status(401).json({
          message: "Authentication Failed !!!",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
        message: "Error !!",
      });
    });
});
//signiup without refercode

router
  // .use(apiAuth)
  .use(user.single("photo"))
  .route("/signup")
  .post((req, res) => {
    // const { error } = registerValidation(req.body);
    // if (error) return res.status(400).send(error.details[0].message);
    var datetime = new Date();
    const referralCode = `${referralCodeGenerator.alphaNumeric(
      "uppercase",
      2,
      2
    )}${datetime.toString().split(" ")[2]}`;
    const studentId = `${referralCodeGenerator.alphaNumeric(
      "uppercase",
      1,
      4
    )}${datetime.toString().split(" ")[2]}${datetime.toString().split(" ")[3]}`;
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const refercode = req.body.refercode;
    console.log(refercode);
    var refBonus = 0;

    if (refercode !== "undefined") {
      refBonus += 200;
      User.findOneAndUpdate(
        { referralCode: refercode },
        { $inc: { pending_balance: 200 } }
      )
        .then((doc) => {
          if (doc) {
            res.status(200).json(doc);
          } else {
            res.status(404).json(doc);
          }
        })
        .catch((err) => res.status(400).json("Error: " + err));
    }
    let photo = "";
    if (req.file) {
      photo = req.file.path;
    }
    const dob = req.body.dob;
    const phone = req.body.phone;
    const address = req.body.address;
    const type = req.body.type;
    const course = req.body.course;
    const instructor = Mongoose.Types.ObjectId(req.body.instructor);
    const previousCourse = req.body.previousCourse;

    User.find({ email }).then((user) => {
      if (user.length >= 1) {
        return res.status(409).json({ message: "Mail exists" });
      } else {
        bcrypt.hash(password, 10, (err, hash) => {
          if (err) {
            return res.status(400).json({ error: err });
          } else {
            const newUser = new User({
              name,
              email,
              password: hash,
              photo,
              dob,
              phone,
              address,
              type,
              course,
              instructor,
              previousCourse,
              referralCode,
              studentId,
              balance: refBonus,
              refered_by: refercode,
            });
            newUser
              .save()
              .then(async () => {
                userid = newUser._id;
                try {
                  const emailToken = jwt.sign(
                    { id: userid },
                    process.env.SECRET_KEY,
                    {
                      expiresIn: "1h",
                    }
                  );
                  let mailer = nodemailer.createTransport({
                    service: "gmail",
                    auth: {
                      user: "rokaiyaothoi@gmail.com",
                      pass: "@123rokyeaa@123rokyeaa@",
                    },
                  });
                  const url = `http://localhost:8080/api/v1/user/confirmation/${emailToken}`;
                  await mailer.sendMail({
                    from: EMAIL_ADDRESS,
                    to: email,
                    subject: "Verify Your Methodmelody Account",
                    html: `<img src="http://methodmelody.com/assets/images/logo/logo-red.png"><h2>Welcome to METHODMELODY- very first music learning platform of  the country </h2><br>
                    To complete the signup please proceed with the link<br>
                    ${url} <br><br>
                    if you have any problem while proceeding with our platform don't forget to give us a feedback in info@methodmelody.com. Your experienc is our first priority. <br>`,
                  });
                } catch (err) {
                  console.log(err);
                }
                Analytics.findOneAndUpdate(
                  { _id: "5fdb01d70379f5528c7f8928" },
                  { $inc: { user: 1 } },
                  { useFindAndModify: false }
                ).exec();
                res.status(200).json({
                  message: `user added!`,
                  id: newUser._id,
                });
              })
              .catch((err) => res.status(500).json("Error: " + err));
          }
        });
      }
    });
  });
//signup with refercode

//put/referBonus-Update
router
  .use(apiAuth)
  .route("/referbonus")
  .post((req, res) => {
    const id = req.body.id;
    const leftBonus = req.body.leftBonus;
    User.findOneAndUpdate({ _id: id }, { $inc: { referralBonus: -leftBonus } })
      .then((doc) => {
        if (doc) {
          res.status(200).json(doc);
        } else {
          res.status(404).json(doc);
        }
      })
      .catch((err) => res.status(400).json("Error: " + err));
  });

router
  .use(apiAuth)
  .route("/")
  .get((req, res) => {
    User.find()
      .then((docs) => res.status(200).json(docs))

      .catch((err) => res.status(400).json("Error: " + err));
  });
router
  .use(apiAuth)
  .route("/")
  .post(async (req, res) => {
    const id = Mongoose.Types.ObjectId(req.body.user);
    var query = req.body;
    var special_query = {};
    for (var key in query) {
      if (key !== "type" && query[key] !== "") {
        special_query[key] = `${query[key]}`;
      }
    }
    if (req.body.password) {
      special_query["password"] = await bcrypt.hash(req.body.password, 10);
    }

    if (req.file) special_query["photo"] = req.file.path;
    User.findByIdAndUpdate(
      id,
      { $set: special_query },
      { useFindAndModify: false }
    )
      .then((doc) => {
        if (doc) {
          res.status(200).json(`User Updated Successfully!`);
        } else {
          res.status(404).json(`User Update Failed!`);
        }
      })
      .catch((err) => res.status(400).json("Error: " + err));
  });

//GET by ID
router.route("/suspend/:userId").post((req, res) => {
  const id = req.params.userId;
  User.findByIdAndUpdate(
    id,
    { $set: { suspend: true } },
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

module.exports = router;
