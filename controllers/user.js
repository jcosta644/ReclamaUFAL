"use strict";

const UserModel = require("../models/user");

module.exports = {
	getTop(req, res, next) {

		UserModel.getTop()
			.then(result => res.json(result))
			.catch(err => next(err));
	}
}