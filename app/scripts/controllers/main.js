'use strict';

angular.module('teastackApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/usages').success(function(usages) {
      $scope.usages = usages;
    });
  });
