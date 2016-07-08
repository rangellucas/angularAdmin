var indexApp = angular.module("mainApp");
indexApp.factory('SrvLoad',['$rootScope', '$location', function($rootScope, $location){

	var service = {
		loading: function(){

			var paginaAtual = $location.path();
			if(paginaAtual!="/index"){
				$("#page-content-wrapper").hide();
				$("#page-loading").show();
			}else{
				$("#page-loading").hide();
			}		
		},
		loaded: function(){
			$("#page-content-wrapper").show();
			$("#page-content-wrapper").addClass("fadeIn animated");
    		$("#page-loading").hide();
		}
	}
	
	return service;

}]);