/** @format */

const express = require("express");
const router = express.Router();

const Topic= require("../controller/topic.controller.js");

router.get("/topics", Topic.findTopics);

module.exports = router;