(function(){
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', MyController);

  MyController.$inject = ['$scope'];

  function MyController($scope) {
    // $scope.items = "";
    $scope.check = function() {
      var msg = $scope.items || "";
      if ( msg.length == 0) {
        $scope.msg = "Please enter data first";
        return;
      }
      // var count = msg.split(',').filter(Boolean).length;
      var count = msg.split(',').filter( a => a.trim()).length;
      $scope.msg = (count > 3) ? "Too much!" : "Enjoy!" ;
    };
  }
})();
