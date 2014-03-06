'use strict';

var mongoose = require('mongoose'),
  Usage = mongoose.model('Usage');


/**
 * Get all usage data.
 */
exports.usages = function (req, res) {
  return Usage.find(function (err, usages) {
    if (!err) {
      return res.json(usages);
    } else {
      return res.send(err);
    }
  });
};


/**
 * Find usage data for a particular postcode.
 */
exports.findUsage = function (req, res) {
  return Usage.find({postcode: req.params.postcode}, function (err, usages) {
    if (!err) {
      return res.json(usages);
    } else {
      return res.send(err);
    }
  });
};


/**
 * Add a single usage entry.
 */
exports.addUsage = function (req, res) {
  // Grab the request decode it and populate a Usage model instance.
  console.log('params', req.body);
  var usage = new Usage({
    postcode: req.body.postcode,
    day: req.body.day,
    hour: req.body.hour,
    electricity: req.body.electricity,
    gas: req.body.gas,
    water: req.body.water
  });

  usage.save(function (err, data) {
    if (!err) {
      return res.json(data);
    } else {
      return res.send(err);
    }
  });
};