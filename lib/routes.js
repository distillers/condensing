'use strict';

var api = require('./controllers/api'),
  index = require('./controllers');

/**
 * Application routes
 */
module.exports = function (app) {

  // Server API Routes
  app.get('/api/usages', api.usages);

  app.get('/api/usage/:postcode', api.findUsage);

  app.post('/api/usage', api.addUsage);


  // All undefined API routes should return a 404
  app.get('/api/*', function (req, res) {
    res.send(404);
  });

  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', index.index);
};