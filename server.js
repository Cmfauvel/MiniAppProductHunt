const axios = require("axios");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json({
    extended: false
  }))
  app.use(cors());

  app.post("/user", (req, res) => {
    console.log(req.body.pseudo)
    axios.get("https://api.producthunt.com/v1/oauth/authorize?client_id=[clientid]&redirect_uri=[where shall we redirect to?]&response_type=code&scope=public+private",
      {
        headers: {
          "token": ""
        }
      })
      .then(function (response) {
        console.log(res.data);
        res.send(response.data);
      })
      .catch(function (error) {
        console.log("err", error);
        res.send("error");
      });
  })

  app.listen(5000);