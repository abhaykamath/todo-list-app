const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const app = express();

connectDB(process.env.MONGO_URI);

app.get("/", (req, res) => {
  res.json("OK");
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
