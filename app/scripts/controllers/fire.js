'user strict';

angular.module('teastackApp')
  .controller('FireCtrl', function ($scope, $firebase) {
    console.log(' --> Problems loading up');
    var probRef = new Firebase('https://shanky.firebaseio.com/');
    // Automatically sync everywhere in realtime
    $scope.problems = $firebase(probRef);
    console.log(' <-- Problems retrieved');
  });
