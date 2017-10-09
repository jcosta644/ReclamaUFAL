"use strict";

const ComplaintModel = require("../models/complaint");

module.exports = {
	create(req, res, next) {
		const data = req.body;

		ComplaintModel.create(data)
			.then(complaint => {
                res.status(CREATED_STATUS_CODE).send("Criado com sucesso");
            })
			.catch(err => next(err));
	}
};
