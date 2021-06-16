const axios = require("axios");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
  app.use(cors({
    origin: "http://localhost:4200"
  }
  ));

  // app.get("/v1/posts", (req, res) => {
  //   axios.get("https://api.producthunt.com/v1/posts/all?sort_by=votes_count&order=desc&search[featured]=true&per_page=20",
  //     {
  //       headers : {
  //         Authorization : "Bearer ltFzvc_0ClMTivn7PaXKVwCOL1SwqoufwO_D_fmHuAA"
  //       }  
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //       res.send(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log("err", error);
  //       res.send("error");
  //     });
  // })

  app.get("/v1/posts/day", (req, res) => {
    const date = "2021-02-01"
    //req.body.date;
    axios.get(`https://api.producthunt.com/v1/posts?day=${date}`, {
      headers : {
        Authorization : "Bearer ltFzvc_0ClMTivn7PaXKVwCOL1SwqoufwO_D_fmHuAA"
      }  
    }).then(function (response) {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      console.log("err", error);
      res.send("error");
    });
  })

  app.listen(5000);