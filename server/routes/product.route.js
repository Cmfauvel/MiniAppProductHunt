/** @format */

const express = require("express");
const router = express.Router();

const Product = require("../controller/product.controller.js");

router.post("/posts", Product.findProductByDate);
router.post("/posts/cat", Product.findProductByCategory);
router.get("/:date/:topic", Product.findProductByCategoryByDate)
module.exports = router;