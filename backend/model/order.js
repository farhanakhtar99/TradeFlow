const mongoose = require("mongoose");

const { Schema } = require("mongoose");

const ordersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});

const Order = mongoose.model("Order", ordersSchema);

module.exports = Order;
