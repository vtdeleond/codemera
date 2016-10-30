(function(){
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', MyController);

  MyController.$inject = ['$scope'];

  function MyController($scope) {
    // $scope.items = "";
    $scope.valid = null;
    $scope.check = function() {
      var msg = $scope.items || "";
      var count = msg.split(',').filter( a => a.trim()).length;
      if ( count == 0) {
        $scope.msg = "Please enter data first";
        $scope.valid = false;
        return;
      }
      // var count = msg.split(',').filter(Boolean).length;
      $scope.valid = true;
      $scope.msg = (count > 3) ? "Too much!" : "Enjoy!" ;
    };
  }
})();
