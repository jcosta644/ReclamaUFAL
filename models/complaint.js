"use strict";

//const Promise = require("bluebird");
const mongo = require("mongoose");
const ComplaintSchema = require("./schemas/complaint");

let ComplaintModel;

//mongo.Promise = Promise;

ComplaintSchema.statics = {
	create(data) {
		let complaint = new ComplaintModel(data);
		//complaint.markModified('object');

		return complaint.save();
	}
};

ComplaintModel = module.exports = mongo.model("Complaint", ComplaintSchema);
