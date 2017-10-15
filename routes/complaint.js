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
router.route("/:category")
	.get(ComplaintCtrl.getByCategory);

module.exports = router;