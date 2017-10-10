"use strict";

//const Promise = require("bluebird");
const mongo = require("mongoose");
const Schema = mongo.Schema;

//mongo.Promise = Promise;

const ComplaintSchema = new Schema({
	titulo: {
		required: true,
		type: String
	},
	descricao: {
		required: true,
		type: String
	},
	categoria: {
		required: true,
		type: String
	},
	autor: {
		type: String
	},
	prioridade: {
		type: Number
	},
	ranking: {
		type: Number
	}

});

module.exports = ComplaintSchema;