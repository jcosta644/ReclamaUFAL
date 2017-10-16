"use strict";

const ComplaintModel = require("../models/complaint");

module.exports = {
	create(req, res, next) {
		const data = req.body;

		ComplaintModel.create(data)
			.then(complaint => res.json(complaint))
			.catch(err => next(err));
	},
	getAll(req, res, next) {

		ComplaintModel.getAll()
			.then(result => res.json(result))
			.catch(err => next(err));
	},
	getByCategory(req, res, next) {
		const category =  req.params.category;

		ComplaintModel.getByCategory(category)
			.then(result => res.json(result))
			.catch(err => next(err));
	},
	getSolved(req, res, next) {

		ComplaintModel.getSolved()
			.then(result => res.json(result))
			.catch(err => next(err));
	},
	getUnsolved(req, res, next) {

		ComplaintModel.getUnsolved()
			.then(result => res.json(result))
			.catch(err => next(err));
	},
	updateToSolved(req, res, next) {
		const idComplaint = req.params.id;

		ComplaintModel.updateToSolved(idComplaint)
			.then(result => res.json(result))
			.catch(err => next(err));

	},
	updatePriority(req, res, next) {
		const idComplaint = req.params.id;
		const priority = req.params.priority;

		ComplaintModel.updatePriority(idComplaint, priority)
			.then(result => res.json(result))
			.catch(err => next(err));
	},
	updateVote(req, res, next) {
		const idComplaint = req.params.id;

		ComplaintModel.updateVote(idComplaint)
			.then(result => res.json(result))
			.catch(err => next(err));

	}
};
