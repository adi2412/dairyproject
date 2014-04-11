'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Milk producers Schema
 */

var NGOSchema = new Schema({
	ngoName: String,
	contactPerson: String,
	mobile: String,
	landline: String,
	tollFree: String,
	fax: String,
	email: String,
	line1: String,
	line2: String,
	postOffice: String,
	zipCode: Number,
	district: String,
	state: String,
	website: String
});


module.exports = mongoose.model('NGO', NGOSchema);