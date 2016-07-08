var indexApp = angular.module("indexApp",["mainApp"]);
indexApp.controller('CtrlForms', ['$scope', 'SrvForms', function($scope, SrvForms) {

  //init modulo
  SrvForms.init($scope);

}]);