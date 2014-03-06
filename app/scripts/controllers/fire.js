'user strict';

// location of our tea cup usage data
var FIREBASE_URL = 'https://cuppa.firebaseio.com/';

angular.module('teastackApp')
  .controller('FireCtrl', function ($scope, $firebase) {
    console.log(' --> Grabbing the tea cup data');
    var db = new Firebase(FIREBASE_URL);

    // Automatically sync everywhere in realtime
    $scope.cuppas = $firebase(db);
    console.log(' <-- Cuppas retrieved. Have a brew');
  });
