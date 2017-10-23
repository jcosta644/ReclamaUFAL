"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	idRedeSocial: {
		type: String
	},
	quantidadeReclamacoes: {
		type: Number,
		default: 0
	}

});

module.exports = UserSchema;