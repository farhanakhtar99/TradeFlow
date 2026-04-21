const mongoose = require("mongoose");

const { Schema } = require("mongoose");

const holdingsSchema = new Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
});

const Holding = mongoose.model("Holding", holdingsSchema);

module.exports = Holding;
