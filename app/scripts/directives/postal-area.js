angular.module('components', [])
  .directive('postalArea', function () {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        postalArea: '=area'
      },
      controller: function ($scope, $element) {
      },
      template: '<div class="area-dir"' +
        'style="background-color: rgba(0, 102, 0, {{ postalArea.energy }});">' +
      '&nbsp;</div>',
      replace: true
    };
  })
