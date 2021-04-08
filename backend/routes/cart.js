const router = require("express").Router();
const Mongoose = require("mongoose");
const User = require("../models/User.model");
const Cupon = require("../models/Cupon.model");
const nodemailer = require("nodemailer");
const EMAIL_ADDRESS = "no-reply@methodmelody.com";
// const Purchase = require("../models/Purchase.model");
const SSLCommerz = require("sslcommerz-nodejs");
const axios = require("axios");
const { v4: uuidv4 } = require("uuid");
const { find } = require("../models/User.model");

let settings = {
  isSandboxMode: true, //false if live version
  store_id: "metho600e5b92ab76f",
  store_passwd: "metho600e5b92ab76f@ssl",
};

let sslcommerz = new SSLCommerz(settings);

router.route("/success/:userId").post(async (req, res) => {
  const user = Mongoose.Types.ObjectId(req.params.userId);
  await axios({
    method: "get",
    url: `https://sandbox.sslcommerz.com/validator/api/validationserverAPI.php?val_id=${req.body.val_id}&store_id=metho600e5b92ab76f&store_passwd=metho600e5b92ab76f@ssl&format=json`,
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  })
    .then(async (doc) => {
      console.log("I from ssl commezr",doc.data);
      const cuponCode = doc.data.value_b;
      const codeUseOrNot = doc.data.value_a;
      console.log("Cart page ", cart);
      if(codeUseOrNot==="true")
      {
       const cupon = await Cupon.findOne({ cuponCode});
       cupon.presentCount = cupon.presentCount + 1;
       cupon.whoUsed.push(user);

       await cupon.save();

      }




      await User.findOneAndUpdate(
        { _id: user },
        {
          $set: {
            currentCartStatus: true,
          },
          // $push: { purchaseHistory: doc.data },
        },
        { useFindAndModify: false }
      )
        .then(async (cart) => {
          console.log(cart.cart);
          //find my referer and update balance and pending balance also user my balance
          const users = await User.findOne({ _id: user });
          /* console.log(users); */
          if (users && users.first_purchase === true) {
            users.first_purchase = false;
            users.balance = users.balance - 200;
            const referer = users.refered_by;
            const refer = await User.findOne({ referralCode: referer });
            if (refer) {
              refer.balance = refer.balance + 200;
              refer.pending_balance = refer.pending_balance - 200;
            }

            await users.save();
            await refer.save();
          }
          /* console.log(users); */
          //course purchase mail
          if (users) {
            console.log(users.email);
            const mail = users.email;
            const name = users.name;
            var transporter = nodemailer.createTransport({
              service: "gmail",
              auth: {
                user: EMAIL_ADDRESS,
                pass: "asdzxc12#12",
              },
            });

            var mailOptions = {
              from: EMAIL_ADDRESS,
              to: mail,
              subject: "Thanks for purchasing course - Methodmelody",
              html: `<img src="http://methodmelody.com/assets/images/logo/logo-red.png"><h2>Thanks for purchasing course from METHODMELODY- very first music learning platform of  the country </h2><br>
                    What happens next? <br>
                    Login to your account and you will find the course in your library.<br>
                    if you have any problem while proceeding with our platform don't forget to give us a feedback in info@methodmelody.com. Your experienc is our first priority. <br>`,
            };

            transporter.sendMail(mailOptions, function (error, info) {
              if (error) {
                //  console.log(error);
              } else {
                // console.log('Email sent: ' + info.response);
              }
            });
          }

          cart.cart.forEach(async (item) => {
            console.log(user);
            console.log(typeof item.toString());
            await axios
              .post(
                "http://localhost:8080/api/v1/buy",
                {
                  user: user.toString(),
                  course: item.toString(),
                },
                {
                  headers: {
                    "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
                    "Content-type": "application/json",
                  },
                }
              )
              .then((buy) => {
              //  console.log(buy.data);
              })
              .catch((a) => {
              //  console.log(a);
              })
              .then(async () => {
                await axios
                  .post(
                    "http://localhost:8080/api/v1/cart/remove_all",
                    {
                      user: user.toString(),
                    },
                    {
                      headers: {
                        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
                        "Content-type": "application/json",
                      },
                    }
                  )
                  .then((cartRemove) => {
                 //   console.log(cartRemove.data.message);
                 res.redirect("https://methodmelody.com/studentpanel");
                  })
                  .catch((a) => {
                  //  console.log(a);
                  });
              });
          });
        })
        .catch((err) => {
          throw err;
        });
    })
    .catch((error) => {
      res.status(400).json("Error: " + error);
    });
});

router.route("/ssl").post((req, res) => {
  const tran_id = `REF${uuidv4().split("-")[4]}`;
  const total_amount = req.body.total_amount;
  const discount_amount = req.body.discount_amount;
  const cus_name = req.body.cus_name;
  //cupon code use or not
  const value_a = req.body.value_a;
  const value_b = req.body.value_b;
  const cus_phone = req.body.cus_phone;
  const cus_email = req.body.email;
  const cus_add1 = req.body.cus_add1;
  const cus_city = req.body.cus_city;
  const cus_country = req.body.cus_country;
  const cus_postcode = req.body.cus_postcode;
  const num_of_item = req.body.num_of_item;
  const product_name = req.body.product_name;
  const cart = req.body.cart;
  const currency = req.body.currency;
  const user = req.body.cart.id;
  const success_url = `http://localhost:8080/api/v1/cart/success/${user}`;


  let post_body = {};
  post_body["total_amount"] = total_amount;
  post_body["currency"] = currency;
  post_body["tran_id"] = tran_id;
  post_body["cart"] = cart;
  post_body["discount_amount"] = discount_amount;
  post_body["num_of_item"] = num_of_item;
  post_body["success_url"] = success_url;
  post_body["fail_url"] = "http://localhost:8080/api/v1/cart/fail/";
  post_body["cancel_url"] = "http://localhost:8080/api/v1/cart/cancel/";
  post_body["emi_option"] = 0;
  post_body["cus_name"] = cus_name;
  post_body["cus_email"] = cus_email;
  post_body["cus_phone"] = cus_phone;
  post_body["cus_add1"] = cus_add1;
  post_body["cus_city"] = cus_city;
  post_body["cus_country"] = cus_country;
  post_body["cus_postcode"] = cus_postcode;
  post_body["shipping_method"] = "NO";
  post_body["multi_card_name"] = "";
  post_body["num_of_item"] = num_of_item;
  post_body["product_name"] = product_name;
  post_body["product_category"] = "ecommerce";
  post_body["product_profile"] = "non-physical-goods";
  post_body["product_amount"] = total_amount;
  post_body["value_a"]=value_a;
  post_body["value_b"] = value_b;

  sslcommerz
    .init_transaction(post_body)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
   //   console.log(error);
    });
});

//CART ADD
router.route("/:userId").get((req, res) => {
  const user = Mongoose.Types.ObjectId(req.params.userId);
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

  User.updateOne(
    { _id: user },
    { $addToSet: { cart: course }, $set: { currentCartStatus: false } }
  )
    .then((doc) => {
      res.status(200).json({
        message: `Item added to  cart!`,
      });
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

//CART DELETE
router.route("/delete").post((req, res) => {
  const user = Mongoose.Types.ObjectId(req.body.user);
  const course = Mongoose.Types.ObjectId(req.body.course);
  User.updateOne(
    { _id: user },
    { $pullAll: { cart: [course], $set: { currentCartStatus: false } } }
  )
    .then((doc) => {
      res.status(200).json({
        message: `Item removed from cart!`,
      });
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

//remove all
router.route("/remove_all").post((req, res) => {
  const user = Mongoose.Types.ObjectId(req.body.user);
  User.findOneAndUpdate(
    { _id: user },
    { $set: { cart: [], currentCartStatus: false } },
    { useFindAndModify: false }
  )
    .then((doc) => {
      res.status(200).json({
        message: `Item removed from cart!`,
      });
    })
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/cupon").post((req, res) => {
  const cuponCode = req.body.cuponCode;
  const discount = req.body.discount;
  const useLimit = req.body.useLimit;
  const expireDate = req.body.expireDate;

  const newCupon = new Cupon({
    cuponCode,
    discount,
    useLimit,
    expireDate,
  });
  newCupon
    .save()
    .then((doc) => {
      res.status(201).json(doc);
   //   console.log(doc);
    })
    .catch((err) => res.status(500).json("Error: " + err));
});
router.route("/cupon/list").get((req, res) => {
  Cupon.find({})
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
router.route("/cupon/success").post(async (req, res) => {
  const cuponCode = req.body.cuponCode;
  const cupon = await Cupon.findOne({ cuponCode });
  cupon.presentCount += 1;
  await cupon.save();
});
//signup with refercode
module.exports = router;
