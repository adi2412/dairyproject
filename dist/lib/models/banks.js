'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Milk producers Schema
 */

var BanksSchema = new Schema({
	bankName: String,
	contactPersonName: String,
	contactPerson: String,
	line1: String,
	line2: String,
	postOffice: String,
	zipCode: Number,
	district: String,
	state: String,
	landline: String,
	mobile: String,
	fax: String,
	tollFree: String,
	website: String,
	email: String,
	schemes: String,
	schemeName: String,
	schemeDetails: String,
	eligibility: String,
	schemeCriteria: String,
	rules: String,
	support: String
});


module.exports = mongoose.model('Banks', BanksSchema);