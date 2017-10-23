"use strict";

const Promise = require("bluebird");
const mongoose = require("mongoose");
const UserSchema = require("./schemas/user");

let UserModel;

UserSchema.statics = {
	getTop() {
		let result = UserModel;

		return result.find().sort({"quantidadeReclamacoes": -1}).limit(1);
	}
};

UserModel = module.exports = mongoose.model("User", UserSchema);