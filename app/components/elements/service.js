var indexApp = angular.module("mainApp");
indexApp.factory('SrvElements',['$rootScope', function($rootScope){

	var service = {
		init: function(scope){
			//set title
			scope.title = "Elements";			
		}
	}
	
	return service;

}]);