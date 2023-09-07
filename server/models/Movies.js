const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: {
    type: String,
    // required: true,
  },
  slug: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  thumbnail: {
    type: String,
    // required: true,
  },
  stars: {
    type: String,
    // required: true,
  },
  categories: {
    type: Array,
    // required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Movie", MovieSchema);
