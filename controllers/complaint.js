"use strict";

const ComplaintModel = require("../models/complaint");

module.exports = {
	create(req, res, next) {
		const data = req.body;

		ComplaintModel.create(data)
			.then(complaint => res.json(complaint))
			.catch(err => next(err));
	}
};
