const router = require("express").Router();
const Mongoose = require("mongoose");
const User = require("../models/User.model");
const SSLCommerz = require("sslcommerz-nodejs");
const SSLCommerzPayment = require("sslcommerz");

let settings = {
  isSandboxMode: true, //false if live version
  store_id: "metho600e5b92ab76f",
  store_passwd: "metho600e5b92ab76f@ssl",
};

let sslcommerz = new SSLCommerz(settings);

router.route("/ssl").post((req, res) => {
  const total_amount = req.body.total_amount;
  const cus_name = req.body.cus_name;
  const cus_phone = req.body.cus_phone;
  const email = req.body.email;
  const cus_add1 = req.body.cus_add1;
  const cus_city = req.body.cus_city;
  const cus_country = req.body.cus_country;
  const num_of_item = req.body.num_of_item;
  const product_name = req.body.product_name;
  const product_category = req.body.product_category;
  const product_profile = req.body.product_profile;
  const success_url = req.body.product_profile;
  const fail_url = req.body.product_profile;
  const cancel_url = req.body.product_profile;
  const currency = req.body.currency;

  // new SSLCommerzPayment(
  //   {
  //     store_id: "metho600e5b92ab76f",
  //     store_passwd: "metho600e5b92ab76f@ssl",
  //     total_amount: 100,
  //     currency: "BDT",
  //     tran_id: "REF123",
  //     success_url: success_url,
  //     fail_url: success_url,
  //     cancel_url: success_url,
  //     shipping_method: "Courier",
  //     product_name: "Computer.",
  //     product_category: "Electronic",
  //     product_profile: "general",
  //     cus_name: "Customer Name",
  //     cus_email: "cust@yahoo.com",
  //     cus_add1: "Dhaka",
  //     cus_add2: "Dhaka",
  //     cus_city: "Dhaka",
  //     cus_state: "Dhaka",
  //     cus_postcode: "1000",
  //     cus_country: "Bangladesh",
  //     cus_phone: "01711111111",
  //     cus_fax: "01711111111",
  //     ship_name: "Customer Name",
  //     ship_add1: "Dhaka",
  //     ship_add2: "Dhaka",
  //     ship_city: "Dhaka",
  //     ship_state: "Dhaka",
  //     ship_postcode: 1000,
  //     ship_country: "Bangladesh",
  //     multi_card_name: "mastercard, bkash",
  //     value_a: "ref001_A",
  //     value_b: "ref002_B",
  //     value_c: "ref003_C",
  //     value_d: "ref004_D",
  //   },
  //   false
  // ).then((a) => {
  //   res.status(200).json(a);
  // });

  let post_body = {};
  post_body["total_amount"] = total_amount;
  post_body["currency"] = currency;
  post_body["tran_id"] = "12345";
  post_body["success_url"] = success_url;
  post_body["fail_url"] = fail_url;
  post_body["cancel_url"] = cancel_url;
  post_body["emi_option"] = 0;
  post_body["cus_name"] = cus_name;
  post_body["cus_email"] = email;
  post_body["cus_phone"] = cus_phone;
  post_body["cus_add1"] = cus_add1;
  post_body["cus_city"] = cus_city;
  post_body["cus_country"] = cus_country;
  post_body["shipping_method"] = "NO";
  post_body["multi_card_name"] = "";
  post_body["num_of_item"] = num_of_item;
  post_body["product_name"] = "Test";
  post_body["product_category"] = "Test Category";
  post_body["product_profile"] = product_profile;
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
