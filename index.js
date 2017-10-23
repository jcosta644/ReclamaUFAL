"use strict";

require("dotenv").load();
const express = require("express");
const app = express();
const Promise = require("bluebird");
const mongoose = require('mongoose');
const http = require("http").createServer(app);
const bodyParser = require("body-parser");

const routes = require("./routes");

const db = process.env.DB_HOST;

const port = process.env.PORT;

mongoose.connect(db, {
  useMongoClient: true
});
mongoose.Promise = Promise;
mongoose.set("debug", true);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/complaint", routes.complaint);
app.use("/api/user", routes.user);

http.listen(port);

console.log("Port: "+port);