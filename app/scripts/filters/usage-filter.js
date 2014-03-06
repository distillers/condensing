'use strict';

/**
 * Filter the Firebase cuppa.firebaseio.com usage data by field
 *
 * @author Gavin Boulton
 */
angular.module("filters", [])
  .filter("orderObjectBy", function() {

    return function(cuppas, sortField, reverseSort) {
      var field = sortField || 'day';
      var reverse = reverseSort || false;

      if (cuppas) {
        var filtered = [];

        angular.forEach(cuppas, function(item) {
          console.log('item', item);
          filtered.push(item);
        });

        filtered.sort(function(a, b) {
          return (parseInt(get(a)[field], 10) - parseInt(get(b)[field], 10));
        });

        if(reverse) filtered.reverse();

        return filtered;
      }
    };
  });
