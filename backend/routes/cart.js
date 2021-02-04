const router = require("express").Router();
const Mongoose = require("mongoose");
const User = require("../models/User.model");
const SSLCommerz = require("sslcommerz-nodejs");
const axios = require("axios");
const { v4: uuidv4 } = require("uuid");

let settings = {
  isSandboxMode: true, //false if live version
  store_id: "metho600e5b92ab76f",
  store_passwd: "metho600e5b92ab76f@ssl",
};

let sslcommerz = new SSLCommerz(settings);

router.route("/success").post(async (req, res) => {
  console.log(req.body);
  await axios({
    method: "get",
    url: `https://sandbox.sslcommerz.com/validator/api/validationserverAPI.php?val_id=${req.body.val_id}&store_id=metho600e5b92ab76f&store_passwd=metho600e5b92ab76f@ssl&format=json`,
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  }).then((doc) => {
    console.log(doc.data);
    res.redirect("http://http://63.250.33.174/cart");
  });
});

router.route("/ssl").post((req, res) => {
  const tran_id = `REF${uuidv4().split("-")[4]}`;
  const total_amount = req.body.total_amount;
  const discount_amount = req.body.discount_amount;
  const cus_name = req.body.cus_name;
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

  let post_body = {};
  post_body["total_amount"] = total_amount;
  post_body["currency"] = currency;
  post_body["tran_id"] = tran_id;
  post_body["cart"] = cart;
  post_body["discount_amount"] = discount_amount;
  post_body["num_of_item"] = num_of_item;
  post_body["success_url"] = "http://http://63.250.33.174/api/v1/cart/success/";
  post_body["fail_url"] = "http://http://63.250.33.174/api/v1/cart/fail/";
  post_body["cancel_url"] = "http://http://63.250.33.174/api/v1/cart/cancel/";
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

  sslcommerz
    .init_transaction(post_body)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      console.log(error);
    });
});

//CART ADD
router.route("/:userId").get((req, res) => {
  const user = Mongoose.Types.ObjectId(req.params.userId);
  console.log(user);
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
router.route("/delete").post((req, res) => {
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
