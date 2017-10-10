"use strict";

const express = require("express");
const router = new express.Router();

const ComplaintCtrl = require("../controllers/complaint");

router.route("/")
	.post(ComplaintCtrl.create)
	.get(function(req, res) {
    	res.json({ message: 'só de teste' });
	});
module.exports = router;