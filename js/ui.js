(function() {

  var w;

  w = angular.module('simple',[]);

  w.controller('simpleCtrl', [ '$scope', function ( $scope ) {

    $scope.program = "show('hello world')";
    $scope.output = [];

    $scope.run = function() {

      console.log($scope.program);
      $scope.output.push(eval($scope.program));

    };

  }]);

})();
