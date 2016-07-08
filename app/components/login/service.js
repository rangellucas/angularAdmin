var mainApp = angular.module("mainApp");
mainApp.factory('Auth',['$rootScope', '$location', function($rootScope,$location){
var user;
return{
	loginUser : function(scope){
		$location.path("index");	    
    },
    logoffUser: function(){    	
		$location.path("/login");		 			
    }
  }
}])