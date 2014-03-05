'use strict';

angular.module('teastackApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },{
       'title': 'Firebase',
       'link': '/fire'
    },{
        'title': 'Usages',
        'link': '/usages'
    }];
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
