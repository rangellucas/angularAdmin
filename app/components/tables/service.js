var indexApp = angular.module("mainApp");
indexApp.factory('SrvTables',['DTOptionsBuilder', 'DTColumnBuilder', '$rootScope', '$http', '$q', function(DTOptionsBuilder, DTColumnBuilder, $rootScope, $http, $q){

	var service = {
		init: function(scope){
			//set title
			scope.title = "Tables";		
			scope.showCase = {};	
		},
		listar: function(scope){
			scope.showCase.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
		        var defer = $q.defer();
		        $http.get('json/data.json').then(function(result) {
		            defer.resolve(result.data);		            
		        });
		        return defer.promise;
		    }).withPaginationType('full_numbers');

		    scope.showCase.dtColumns = [
		        DTColumnBuilder.newColumn('id').withTitle('ID'),
		        DTColumnBuilder.newColumn('firstName').withTitle('First name'),
		        DTColumnBuilder.newColumn('lastName').withTitle('Last name').notVisible()
		    ]; 
		},
	}
	
	return service;

}]);