var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema(
<<<<<<< HEAD
	{
		type: { type: Number, default: 4 },
		name: { type: String },
		photo: { type: String },
		age: { type: String },
		phone: { type: String },
		address: { type: String },
		email: {
			type: String,
			required: true,
			unique: true,
			match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		},
		password: { type: String, required: true },
		course: [[{ type: String }, { type: String }]],
		previousCourse: [{ type: Schema.Types.ObjectId }],
		v_token: { type: String },
	},
	{ timestamps: true }
=======
  {
    type: { type: Number, default: 4 },
    name: { type: String },
    photo: { type: String },
    dob: { type: String },
    phone: { type: String },
    address: { type: String },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
    password: { type: String, required: true },
    course: [[{ type: String }, { type: String }]],
    instructor: { type: Schema.Types.ObjectId },
    cart: [{ type: Schema.Types.ObjectId }],
    previousCourse: [{ type: Schema.Types.ObjectId }],
    v_token: { type: String },
  },
  { timestamps: true }
>>>>>>> b0f244956718d63aea63149620a0c7cd5d774689
);

module.exports = mongoose.model("User", UserSchema);
