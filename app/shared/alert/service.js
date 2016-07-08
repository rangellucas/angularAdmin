var indexApp = angular.module("mainApp");
indexApp.factory('SrvAlert',['atomicNotifyService', function(atomicNotifyService){

	var service = {

		alert: function(type,text,icon,time){
			atomicNotifyService.custom(type, text, icon, time);
		},
		close: function($scope){
			atomicNotifyService.close($scope);
		}
		
	}
	
	return service;

}]);