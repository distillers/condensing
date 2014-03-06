'user strict';

angular.module('teastackApp')
  .controller('UsagesCtrl', function ($scope, $interval) {
    var i,
      count = 100,
      results = {};

    $scope.postalAreas = [];

    for (i = 0; i < 38; i++) {
      $scope.postalAreas.push({name: 'postcode-' + i, energy: 1});
    }

    $interval(function () {
      var id = Math.floor(Math.random() * 37),
        cell_id = '#postcode-' + id,
        opacity = results[cell_id] ? (results[cell_id] * 0.8) : 0.8;

      $scope.postalAreas[id].energy = opacity;
      results[cell_id] = opacity;
    }, 1000, count);
  });