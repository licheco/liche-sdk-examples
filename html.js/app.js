const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
require("dotenv").config();

app.use(express.static("public"));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect(302, "/products");
});

app.get("/products", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "product.html"));
});

const PORT = 9999;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
