"use strict";

require("dotenv").load();
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const http = require("http").createServer(app);
const bodyParser = require("body-parser");

const routes = require("./routes");

const db = process.env.DB_HOST;

const port = process.env.PORT || 3030;

mongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/complaint", routes.complaint);

http.listen(port);