'use strict';

angular.module('teastackApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase',
  'components',
  'filters'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/fire', {
            templateUrl: 'partials/fire',
            controller: 'FireCtrl'
        })
        .when('/usages', {
            templateUrl: 'partials/usages',
            controller: 'UsagesCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
