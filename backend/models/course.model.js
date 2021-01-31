var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CourseSchema = new Schema(
<<<<<<< HEAD
	{
		title: { type: String },
		subtitle: { type: String },
		desc: { type: String },
		catagory: { type: String },
		level: { type: String },
		sublevel: { type: String },
		thumbnail: { type: String },
		video: [
			{
				type: Schema.Types.ObjectId,
			},
		],
		instructor: {
			type: Schema.Types.ObjectId,
		},
		topic: [{ type: String }],
		preRequisite: [{ type: Schema.Types.ObjectId }],
		requirements: [{ type: String }],
		nextCourse: [{ type: Schema.Types.ObjectId }],
		relatedCourse: [{ type: Schema.Types.ObjectId }],
		courseHour: { type: Number },
		document: [{ type: Schema.Types.ObjectId }],
		price: { type: String },
		validity: { type: String },
		studentReviews: [
			{
				type: Schema.Types.ObjectId,
			},
		],
		certificate: { type: String },
		sold: { type: Number, default: 0 },
		featured: { type: Boolean, default: false },
		published: { type: Boolean, default: true },
	},
	{ timestamps: true }
=======
  {
    title: { type: String },
    subtitle: { type: String },
    desc: { type: String },
    catagory: { type: String },
    level: { type: String },
    sublevel: { type: String },
    thumbnail: { type: String },
    banner: { type: String },
    videos: [{ type: Object }],
    instructor: {
      type: Schema.Types.ObjectId,
    },
    topic: [{ type: String }],
    preRequisite: [{ type: Schema.Types.ObjectId }],
    requirements: [{ type: String }],
    nextCourse: [{ type: Schema.Types.ObjectId }],
    relatedCourse: [{ type: Schema.Types.ObjectId }],
    courseHour: { type: Number },
    documents: [{ type: Object }],
    price: { type: String },
    validity: { type: String },
    studentReviews: [
      {
        type: Schema.Types.ObjectId,
      },
    ],
    certificate: { type: String },
    sold: { type: Number, default: 0 },
    featured: { type: Boolean, default: false },
    published: { type: Boolean, default: true },
    whoFor: [{ type: String }],
  },
  { timestamps: true }
>>>>>>> b0f244956718d63aea63149620a0c7cd5d774689
);

module.exports = mongoose.model("Course", CourseSchema);
