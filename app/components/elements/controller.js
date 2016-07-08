var indexApp = angular.module("indexApp",["mainApp"]);
indexApp.controller('CtrlElements', ['$scope', 'SrvElements', function($scope, SrvElements) {

  //init modulo
  SrvElements.init($scope);

}]);