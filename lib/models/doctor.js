'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Milk producers Schema
 */

var DoctorsSchema = new Schema({
	doctorName: String,
	mobile: String,
	landline: String,
	line1: String,
	line2: String,
	postOffice: String,
	zipCode: Number,
	district: String,
	state: String,
});


module.exports = mongoose.model('Doctors', DoctorsSchema);