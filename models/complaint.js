"use strict";

const mongo = require("mongoose");
const ComplaintSchema = require("./schemas/complaint");

let ComplaintModel;

ComplaintSchema.statics = {
	create(data) {
		let complaint = new ComplaintSchema(data);

		return complaint.save();
	}
};

ComplaintModel = module.exports = mongo.model("Complaint", ComplaintSchema);
