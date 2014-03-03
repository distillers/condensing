'use strict';

angular.module('teastackApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
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
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
