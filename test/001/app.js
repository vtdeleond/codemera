(function(){
  'use strict';

  // angular.module('MyApp')
  var app = angular.module('myApp', [])
    .controller('MyController', MyFirstController);

  MyFirstController.$inject = ['$scope', '$filter'];

  function MyFirstController($scope, $filter) {
    $scope.name = "VT";
    $scope.costo = 123.5;
    $scope.tasa = 45.5

    $scope.miMensaje = function() {
      var msg = "Tinmarin do pingue.";
      var salida = $filter('uppercase')(msg);
      return salida;
    };
  }
})();
