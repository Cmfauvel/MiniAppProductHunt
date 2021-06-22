/** @format */

require("dotenv").config();
const axios = require("axios");
const token = process.env.TOKEN;
const baseUri = "http://api.producthunt.com/v1";

exports.findProductByDate = (req, res) => {
  const year = req.body.date.year;
  const month = req.body.date.month;
  const day = req.body.date.day;

  axios.get(`${baseUri}/posts?day=` + year + '-' + month + '-' + day, {
    headers: {
      Authorization: "Bearer " + token
    }
  }).then(function (response) {
    res.send(response.data);
  })
    .catch(function (error) {
      res.send("error");
    });
}


exports.findProductByCategoryByDate = (req, res) => {
  const topic = req.params.topic;
  const date = req.params.date;

  axios.get(`${baseUri}/categories/${topic}/posts?day=${date}`, {
    headers: {
      Authorization: "Bearer " + token
    }
  }).then(function (response) {
    res.send(response.data);
  })
    .catch(function (error) {
      res.send("error");
    });
}