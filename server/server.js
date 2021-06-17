
const express = require("express");
const cors = require("cors");
const server = express();
const api = require("./routes");
require("dotenv").config();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

  server.use(cors({
    origin: "http://localhost:4200"
  }
  ));

server.use("/v1", api);


server.listen(5000);