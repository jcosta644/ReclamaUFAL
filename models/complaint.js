"use strict";

const Promise = require("bluebird");
const mongoose = require("mongoose");
const ComplaintSchema = require("./schemas/complaint");

let ComplaintModel;

ComplaintSchema.statics = {
	create(data) {
		let complaint = new ComplaintModel(data);
		//complaint.markModified('object');

		return complaint.save();
	},
	getAll() {
		let result = ComplaintModel;

		return result.find();
	},
	getByCategory(category) {
		return ComplaintModel.find({"categoria": category});
	},
	getSolved() {
		return ComplaintModel.find({"resolvida": true});
	},
	getUnsolved() {
		return ComplaintModel.find({"resolvida": false});
	},
	updateToSolved(id) {
		const options = {
			new: true
		};
		const query = {
			_id: id
		};
		let mod = {};

		mod.$addToSet = {resolvida : true};

		return ComplaintModel.findOneAndUpdate(query, mod, options);
	}

};

ComplaintModel = module.exports = mongoose.model("Complaint", ComplaintSchema);
