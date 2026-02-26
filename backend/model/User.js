const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose").default;

const { Schema } = mongoose;

const userSchema = new Schema({
  email: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
