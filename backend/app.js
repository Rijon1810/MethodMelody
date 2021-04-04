var path = require("path");
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan")

const app = express();
if(process.env.NODE_ENV ==="development"){
  app.use(morgan('dev'))
}


// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });


app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.use(
  "/storage/thumbnail",
  express.static(path.join(__dirname, "../backend/storage/thumbnail"))
);

app.use(
  "/storage/video",
  express.static(path.join(__dirname, "../backend/storage/video"))
);

app.use(
  "/storage/photo",
  express.static(path.join(__dirname, "../backend/storage/photo"))
);

app.use(
  "/storage/document",
  express.static(path.join(__dirname, "../backend/storage/document"))
);

app.use(
  "/storage/store",
  express.static(path.join(__dirname, "../backend/storage/store"))
);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify : false
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const courseRouter = require("./routes/course");
const loginRouter = require("./routes/user");
const videoRouter = require("./routes/video");
const instructorRouter = require("./routes/instructor");
const documentRouter = require("./routes/document");
const contactRouter = require("./routes/contact");
const analyticsRouter = require("./routes/analytics");
const buyRouter = require("./routes/buy");
const featuredRouter = require("./routes/featured");
const soldRouter = require("./routes/sold");
const cartRouter = require("./routes/cart");
const wishListRouter = require("./routes/wishlist");
const referralRouter = require("./routes/referral");
var cron = require("node-cron");

const User = require("./models/User.model");
const Course = require("./models/Course.model");

const { apiAuth, my_cors } = require("./middleware/authentication");


cron.schedule(
  "00 00 12 * * 0-6",
  function () {
    /*
     * Runs every day
     * at 12:00:00 AM.
     */
    var currentTime = new Date();
    User.find()
      .then((docs) => {
        docs.forEach(function (doc) {
          if (doc.course.length !== 0) {
            doc.course.forEach((time, index) => {
              const diffTime = Math.abs(
                Date.parse(currentTime) - Date.parse(time[1])
              );
              const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
              Course.findById(mongoose.Types.ObjectId(time[0]))
                .select("validity")
                .then((data) => {
                  if (data !== null) {
                    if (diffDays > data.validity) {
                      doc.course.splice(index, 1);
                      User.findByIdAndUpdate(
                        doc._id,
                        {
                          $addToSet: { previousCourse: time[0] },
                          $set: {
                            course: doc.course,
                          },
                        },
                        { useFindAndModify: false }
                      ).exec();
                    }
                  }
                });
            });
          }
        });
      })
      .catch((err) => console.log(err));
  },
  { scheduled: true }
);

app.use(
  `/api/${process.env.API_VERSION}/course`,
  apiAuth,
  my_cors,
  courseRouter
);
app.use(`/api/${process.env.API_VERSION}/user`, my_cors, loginRouter);
app.use(`/api/${process.env.API_VERSION}/video`, apiAuth, my_cors, videoRouter);
app.use(
  `/api/${process.env.API_VERSION}/instructor`,
  apiAuth,
  my_cors,
  instructorRouter
);
app.use(
  `/api/${process.env.API_VERSION}/document`,
  apiAuth,
  my_cors,
  documentRouter
);
app.use(
  `/api/${process.env.API_VERSION}/contact`,
  apiAuth,
  my_cors,
  contactRouter
);
app.use(
  `/api/${process.env.API_VERSION}/analytics`,
  apiAuth,
  my_cors,
  analyticsRouter
);
app.use(`/api/${process.env.API_VERSION}/buy`, apiAuth, my_cors, buyRouter);
app.use(
  `/api/${process.env.API_VERSION}/featured`,
  apiAuth,
  my_cors,
  featuredRouter
);
app.use(`/api/${process.env.API_VERSION}/sold`, apiAuth, my_cors, soldRouter);
app.use(
  `/api/${process.env.API_VERSION}/cart`,
  urlencodedParser,
  my_cors,
  cartRouter
);
app.use(
  `/api/${process.env.API_VERSION}/wishlist`,
  apiAuth,
  my_cors,
  wishListRouter
);
app.use(
  `/api/${process.env.API_VERSION}/referral`,
  apiAuth,
  my_cors,
  referralRouter
);

app.get("/storage(/*)?", (req, res) => {
  res.sendStatus(403);
});
/* app.get("(/*)?", function (req, res) {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
}); */

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
