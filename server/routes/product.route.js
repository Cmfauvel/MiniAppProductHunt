/** @format */

const express = require("express");
const router = express.Router();

const Product = require("../controller/product.controller.js");

router.post("/posts", Product.findProductByDate);

module.exports = router;