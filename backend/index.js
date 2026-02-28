require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const Holding = require("./model/holding");
const Position = require("./model/position");
const Order = require("./model/order");
const User = require("./model/User");

const MONGO_URL = process.env.MONGO_URL;

main()
  .then((res) => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const sessionOptions = {
  secret: "mysupersecret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(express.json());
app.use(bodyParser.json());
// app.use(cors());
app.use(session(sessionOptions));
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  }),
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/allHoldings", async (req, res) => {
  const allHoldings = await Holding.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  const allPositions = await Position.find({});
  res.json(allPositions);
});

app.post("/buyOrder", async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId).populate("orders");

    let { name, qty, price } = req.body;
    qty = Number(qty);

    let existingOrder = user.orders.find((o) => o.name === name);

    if (existingOrder) {
      existingOrder.qty += qty;
      existingOrder.price = price;
      await existingOrder.save();

      return res.json({
        status: "BUY_UPDATED",
        order: existingOrder,
      });
    }

    const newOrder = new Order({ name, qty, price, mode: "BUY" });
    await newOrder.save();

    user.orders.push(newOrder._id);
    await user.save();

    res.json({ status: "BUY_CREATED", order: newOrder });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

app.post("/sellOrder", async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId).populate("orders");

    let { name, qty } = req.body;
    qty = Number(qty);

    const existingOrder = user.orders.find((o) => o.name === name);

    if (!existingOrder) {
      return res.status(400).json({ message: "Buy stock first" });
    }

    if (existingOrder.qty < qty) {
      return res.status(400).json({ message: "Not enough quantity" });
    }

    existingOrder.qty -= qty;

    if (existingOrder.qty === 0) {
      await Order.deleteOne({ _id: existingOrder._id });

      await User.updateOne(
        { _id: userId },
        { $pull: { orders: existingOrder._id } },
      );

      return res.json({ status: "REMOVED" });
    }

    await existingOrder.save();

    res.json({ status: "SELL_UPDATED", order: existingOrder });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// app.post("/newOrder", async (req, res) => {
//   let id = req.user._id;
//   let user = await User.findById(id);
//   let { name, qty, price, mode } = req.body;
//   let newOrder = new Order({
//     name: name,
//     qty: qty,
//     price: price,
//     mode: mode,
//   });
//   await newOrder.save();
//   user.orders.push(newOrder._id);
//   await user.save();
//   res.send("Order Saved!");
// });

// app.post("/newOrder", async (req, res) => {
//   try {
//     let userId = req.user._id;
//     let user = await User.findById(userId).populate("orders");

//     let { name, qty, price, mode } = req.body;
//     qty = Number(qty);

//     // 🟢 BUY LOGIC
//     if (mode === "BUY") {
//       let newOrder = new Order({ name, qty, price, mode: "BUY" });
//       await newOrder.save();

//       user.orders.push(newOrder._id);
//       await user.save();

//       return res.json({ success: true, message: "Stock Bought!" });
//     }

//     //  SELL LOGIC
//     if (mode === "SELL") {
//       // find existing order of this stock
//       let existingOrder = user.orders.find((order) => order.name === name);

//       if (!existingOrder) {
//         return res.status(400).json({
//           success: false,
//           message: "You don't own this stock. Buy first!",
//         });
//       }

//       // check quantity
//       if (existingOrder.qty < qty) {
//         return res.status(400).json({
//           success: false,
//           message: "Not enough quantity to sell!",
//         });
//       }

//       // deduct quantity
//       existingOrder.qty -= qty;

//       if (existingOrder.qty === 0) {
//         // remove order completely
//         await Order.findByIdAndDelete(existingOrder._id);
//         user.orders = user.orders.filter(
//           (id) => id.toString() !== existingOrder._id.toString(),
//         );
//       } else {
//         await existingOrder.save();
//       }

//       await user.save();

//       return res.json({ success: true, message: "Stock Sold!" });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
// });
// app.post("/newOrder", async (req, res) => {
//   try {
//     const userId = req.user._id;
//     const user = await User.findById(userId).populate("orders");

//     let { name, qty, price, mode } = req.body;
//     qty = Number(qty);

//     // 🟢 BUY LOGIC
//     if (mode === "BUY") {
//       // check if user already owns this stock
//       let existingOrder = user.orders.find((order) => order.name === name);

//       if (existingOrder) {
//         // increase qty instead of creating new order
//         existingOrder.qty += qty;
//         existingOrder.price = price; // optional: update latest price
//         await existingOrder.save();

//         return res.json({
//           status: "BUY_UPDATED",
//           order: existingOrder,
//           message: "Stock quantity updated",
//         });
//       }

//       // create new order if not exists
//       const newOrder = new Order({ name, qty, price, mode: "BUY" });
//       await newOrder.save();

//       user.orders.push(newOrder._id);
//       await user.save();

//       return res.json({
//         status: "BUY_CREATED",
//         order: newOrder,
//         message: "Stock Bought!",
//       });
//     }

//     // 🔴 SELL LOGIC
//     if (mode === "SELL") {
//       const existingOrder = user.orders.find((o) => o.name === name);

//       if (!existingOrder) {
//         return res.status(400).json({
//           success: false,
//           message: "You don't own this stock. Buy first!",
//         });
//       }

//       if (existingOrder.qty < qty) {
//         return res.status(400).json({
//           success: false,
//           message: "Not enough quantity to sell!",
//         });
//       }

//       // deduct qty
//       existingOrder.qty -= qty;

//       // 🗑️ remove completely if qty = 0
//       if (existingOrder.qty === 0) {
//         await Order.deleteOne({ _id: existingOrder._id });

//         await User.updateOne(
//           { _id: userId },
//           { $pull: { orders: existingOrder._id } },
//         );

//         return res.json({
//           status: "REMOVED",
//           message: "Stock fully sold",
//         });
//       }

//       // 💾 save updated qty
//       await existingOrder.save();

//       return res.json({
//         status: "SELL_UPDATED",
//         order: existingOrder,
//         message: "Stock quantity updated after sell",
//       });
//     }

//     return res.status(400).json({ message: "Invalid mode" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

app.get("/userOrders", async (req, res) => {
  try {
    const userId = req.user._id;

    const user = await User.findById(userId).populate("orders");

    res.json(user.orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

app.post("/signup", async (req, res) => {
  try {
    let { username, email, password } = req.body;

    let newUser = new User({ username, email });
    let registeredUser = await User.register(newUser, password);

    req.logIn(registeredUser, (err) => {
      if (err) {
        console.log(err);
      }

      // send response ONLY after login session is saved
      return res.json({ success: true, user: registeredUser });
    });
  } catch (err) {
    // 👇 user already exists
    if (err.name === "UserExistsError") {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

app.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
  }),
  (req, res) => {
    res.json({ success: true, user: req.user });
  },
);

app.get("/logout", async (req, res) => {
  req.logOut(() => {
    res.json({ success: true, user: req.user });
  });
});

app.get("/currentUser", (req, res) => {
  if (req.isAuthenticated()) {
    return res.json({ user: req.user });
  }
  res.status(401).json({ user: null });
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(8080, () => {
  console.log("Server is listening at port 8080");
});
