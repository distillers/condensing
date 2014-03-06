'use strict';

var mongoose = require('mongoose'),
  usages = require('./usages.json'),
  Usage = mongoose.model('Usage');

console.log(' ++ Number of dummy usage entries', usages.length);

/**
 * Populate database with sample usage data from
 * our local usages.json file
 */
Usage.find({}).remove(function () {
  usages.forEach(function (u) {
    console.log(' ++ creating Usage record', u);

    var data = new Usage({
      postcode: u.postcode,
      house: u.house,
      day: u.day,
      hour: u.hour,
      electricity: u.electricity,
      gas: u.gas,
      water: u.water
    });
    data.save();
  });
});
