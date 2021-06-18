/** @format */

const express = require("express");
const router = express.Router();
const productApi = require("./product.route.js");
const topicApi = require("./topic.route.js");

router.use(topicApi);
router.use(productApi);

module.exports = router;