/** @format */

require("dotenv").config();
const axios = require("axios");

exports.findProductByDate = (req, res) => {
    const token = process.env.TOKEN; 
    const year = req.body.date.year;
    const month = req.body.date.month;
    const day = req.body.date.day;
    // console.log(req.body);
    axios.get(`https://api.producthunt.com/v1/posts?day=` + year + '-' + month + '-' + day, {
      headers : {
        Authorization : "Bearer ltFzvc_0ClMTivn7PaXKVwCOL1SwqoufwO_D_fmHuAA"
      }  
    }).then(function (response) {
      // console.log(response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      console.log("err", error);
      res.send("error");
    });
}