const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
require("dotenv/config");
app.use(bodyParser.json());
const pRoutes = require("./routes/posts");
app.use("/posts", pRoutes);
//ROUTES
app.get("/", (req, res) => {
  res.send("Heyo Sahan!!! Whast's UP");
});

async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log("database connected successfully");
  } catch (err) {
    console.error("Database constists of error", err);
  }
}
connectDB();

//listen
app.listen(3000);
