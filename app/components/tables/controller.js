var indexApp = angular.module("indexApp",["mainApp"]);
indexApp.controller('CtrlTables', ['$scope', 'SrvTables', function($scope, SrvTables) {

  //init modulo
  SrvTables.init($scope);

  //list json data
  SrvTables.listar($scope);

}]);