var indexApp = angular.module("mainApp");
indexApp.factory('SrvForms',['$rootScope', function($rootScope){

	var service = {
		init: function(scope){
			//set title
			scope.title = "Form";			
		}
	}
	
	return service;

}]);