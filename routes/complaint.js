"use strict";

const express = require("express");
const router = new express.Router();

const ComplaintCtrl = require("../controllers/complaint");

router.route("/")
	.post(ComplaintCtrl.create)
	.get(ComplaintCtrl.getAll);
router.route("/sorted")
	.get(ComplaintCtrl.getAllSorted);
router.route("/vote")
	.get(ComplaintCtrl.getToVote);
router.route("/solved")
	.get(ComplaintCtrl.getSolved);
router.route("/unsolved")
	.get(ComplaintCtrl.getUnsolved);
router.route("/find/:category")
	.get(ComplaintCtrl.getByCategory);
router.route("/update/:id")
	.get(ComplaintCtrl.updateToSolved);
router.route("/update/:id/vote")
	.get(ComplaintCtrl.updateVote);
router.route("/update/:id/:priority")
	.get(ComplaintCtrl.updatePriority);

module.exports = router;