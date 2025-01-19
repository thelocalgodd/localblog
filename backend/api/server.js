const express = require("express"),
  app = express(),
  cors = require("cors"),
  cookieParser = require("cookie-parser"),
  path = require("path");

require("dotenv").config();

const { connectToMongoDb } = require("../utils/db");

// Connect to MongoDB
connectToMongoDb();

// Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Routes
const authRoute = require("../routes/authRoute");
const userRoute = require("../routes/userRoute");
const postRoute = require("../routes/postRoute");

// Serve API documentation
app.get("/api/docs", (req, res) => {
  res.sendFile(path.join(__dirname, "/docs.html"));
});

app.get("/", (req, res) => {
  res.json({
    message: "hello from localblogg",
  });
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

// Start the localblogg Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`localblogg is running on http://localhost:${PORT}`);
});
