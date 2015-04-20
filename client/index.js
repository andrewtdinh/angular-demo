/* global Firebase:true */

'use strict';

angular.module('alpha', [])
.controller('gamma', ['$scope', function($scope){
  console.log('beta controller initialized');
  $scope.x = 5;
  $scope.y = 7;
}])
.controller('beta', ['$scope', function($scope){
  console.log('beta controller initialized');
  $scope.x = 3;
  $scope.y = 2;
}])
.run(['$rootScope', function($rootScope){
  console.info('runnning the gun function');
  $rootScope.z = 12;
}])
.controller('calculator', ['$scope', function($scope){
  console.info('calculator controller initialized');
  $scope.compute = function(){
    console.warn('we just clicked the green compute button');

    var result;
    var x = $scope.x;
    var y = $scope.y;

    switch($scope.op){
      case '+':
        result = x + y;
        break;
      case '-':
        result = x - y;
        break;
      case '*':
        result = x * y;
        break;
      case '/':
        result = x / y;
        break;
    }
    $scope.result = result;
  };

}]);
