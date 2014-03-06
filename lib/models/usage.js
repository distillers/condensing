'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Usage Schema
 */
var UsageSchema = new Schema({
  postcode: Number,
  house: Number,
  hour: Number,
  electricity: Number,
  gas: Number,
  water: Number
});


/**
 * Validations
 */
UsageSchema.path('postcode').validate(function (num) {
  return num >= 0 && num <= 53;
}, 'Postcode must be between 0 and 53');

UsageSchema.path('house').validate(function (num) {
  return num >= 0 && num <= 99;
}, 'House must be between 0 and 99');

UsageSchema.path('hour').validate(function (num) {
  return num >= 0 && num <= 23;
}, 'Hour number must be between 0 and 23');

mongoose.model('Usage', UsageSchema);
