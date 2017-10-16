"use strict";

const express = require("express");
const router = new express.Router();

const ComplaintCtrl = require("../controllers/complaint");

router.route("/")
	.post(ComplaintCtrl.create)
	.get(ComplaintCtrl.getAll);
router.route("/solved")
	.get(ComplaintCtrl.getSolved);
router.route("/unsolved")
	.get(ComplaintCtrl.getUnsolved);
router.route("/find/:category")
	.get(ComplaintCtrl.getByCategory);
router.route("/update/:id")
	.get(ComplaintCtrl.updateToSolved);

module.exports = router;