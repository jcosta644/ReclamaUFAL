"use strict";

//const Promise = require("bluebird");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
		type: Number,
		default: 0
	},
	ranking: {
		type: Number,
		default: 0
	},
	votos: {
		type: Number,
		default: 0
	},
	resolvida: {
		type: Boolean,
		default: false

	},
	dataCriada: {
		type: Date,
		default: Date.now
	},
	dataResolvida: {
		type: Date
	}

});

module.exports = ComplaintSchema;