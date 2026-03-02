require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const wrapAsync = require("./utils/wrapAsync");

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

app.get("/holdings", async (req, res) => {
  const allHoldings = await Holding.find({});
  res.json(allHoldings);
});

app.get("/positions", async (req, res) => {
  const allPositions = await Position.find({});
  res.json(allPositions);
});

app.post(
  "/buyOrder",
  wrapAsync(async (req, res, next) => {
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
  }),
);

app.post(
  "/sellOrder",
  wrapAsync(async (req, res, next) => {
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
  }),
);

app.get(
  "/userOrders",
  wrapAsync(async (req, res, next) => {
    const userId = req.user._id;

    const user = await User.findById(userId).populate("orders");

    res.json(user.orders);
  }),
);

app.post(
  "/signup",
  wrapAsync(async (req, res, next) => {
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
  }),
);

app.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
  }),
  (req, res) => {
    res.json({ success: true, user: req.user });
  },
);

app.get(
  "/logout",
  wrapAsync(async (req, res, next) => {
    req.logOut(() => {
      res.json({ success: true, user: req.user });
    });
  }),
);

app.get("/currentUser", (req, res) => {
  if (req.isAuthenticated()) {
    return res.json({ user: req.user });
  }
  res.status(401).json({ user: null });
});

app.use((err, req, res, next) => {
  let { status = 500, message = "Something went wrong" } = err;

  res.status(status).json({
    success: false,
    message: message,
  });
});

app.listen(8080, () => {
  console.log("Server is listening at port 8080");
});
