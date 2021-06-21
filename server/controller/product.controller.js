/** @format */

require("dotenv").config();
const axios = require("axios");
const token = process.env.TOKEN; 
const baseUri = "http://api.producthunt.com/v1";

exports.findProductByDate = (req, res) => {
    const year = req.body.date.year;
    const month = req.body.date.month;
    const day = req.body.date.day;
    // console.log(req.body);
    axios.get(`${baseUri}/posts?day=` + year + '-' + month + '-' + day, {
      headers : {
        Authorization : "Bearer " + token
      }  
    }).then(function (response) {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      console.log("err", error);
      res.send("error");
    });
}

exports.findProductByCategory = (req, res) => {
 const topic = req.body.topic;
 console.log(req.body)
  axios.get(`${baseUri}/posts/all?search[category]=${topic}`, {
    headers : {
      Authorization : "Bearer " + token
    }  
  }).then(function (response) {
    res.send(response.data);
  })
  .catch(function (error) {
    console.log(req.body);
    res.send("error");
  });
}


exports.findProductByCategoryByDate = (req, res) => {
    const topic = req.params.topic;
  const date = req.params.date;
  // req.body.topic.replace(/ /g, "")
  console.log(req.params);
  axios.get(`${baseUri}/categories/${topic}/posts?day=${date}`, {
    headers : {
      Authorization : "Bearer " + token
    }  
  }).then(function (response) {
    res.send(response.data);
  })
  .catch(function (error) {
    console.log(error)
    res.send("error");
  });
}