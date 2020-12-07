const express = require("express");
const cors = require("cors");
const port = "3026";

// express application
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Hello E-Commerce App");
});

// IIFE to start db connection and express listening
app.listen(port, () => console.log(`Sever succ running on port ${port}`));
