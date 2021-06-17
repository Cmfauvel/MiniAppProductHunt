/** @format */

const express = require("express");
const router = express.Router();
const productApi = require("./product.route.js")

router.use(productApi);

module.exports = router;