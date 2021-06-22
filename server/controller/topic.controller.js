/** @format */

require("dotenv").config();
const axios = require("axios");

exports.findTopics = (req, res) => {
    const token = process.env.TOKEN; 

    axios.get(`https://api.producthunt.com/v1/topics`, {
      headers : {
        Authorization : "Bearer " + token
      }  
    }).then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      res.send("error");
    });
}