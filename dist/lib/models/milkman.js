'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Milk producers Schema
 */

var MilkmanSchema = new Schema({
	firstName: String,
	lastName: String,
	fatherName: String,
	mobile1: Number,
	mobile2: Number,
	mobile3: Number,
	line1: String,
	line2: String,
	postOffice: String,
	zipCode: Number,
	district: String,
	state: String,
	uOrr: String,
	ward: Number,
	cow: Number,
	buffalo: Number,
	bashi: Number,
	basdha: Number,
	paadi: Number,
	pada: Number,
	camel: Number,
	horse: Number,
	goat: Number,
	male15plus: Number,
	female15plus: Number,
	children: Number
});

/**
 * Virtuals
 */

MilkmanSchema.virtual('totalCattle').get(function(){
	return this.ward + this.cow + this.buffalo + this.bashi + this.paadi + this.pada + this.camel + this.horse + this.goat;
});

module.exports = mongoose.model('Milkman', MilkmanSchema);