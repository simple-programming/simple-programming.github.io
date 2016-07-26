(function() {

  var w;

  w = angular.module('simple',['ngCookies']);

  w.controller('simpleCtrl', [ '$scope', '$cookies', function ( $scope, $cookies ) {

    function save() {
      $cookies.putObject("simple-files", $scope.files);
      $cookies.putObject("simple-settings", $scope.settings);
    }

    $scope.files = $cookies.getObject("simple-files");
    $scope.settings = $cookies.getObject("simple-settings");

    if ( !$scope.files ) {
      $scope.files = [
        {
          name: "hello.js",
          content: "show(1+1)"
        }
      ]
    }

    if ( !$scope.settijgs ) {
      $scope.settings = {
        current: 0
      }
    }

    console.log([$scope.files,$scope.settings]);

    save();

    $scope.output = [];

    $scope.run = function() {
      $scope.output.push(eval($scope.files[$scope.settings.current].content));

    };

  }]);

})();
