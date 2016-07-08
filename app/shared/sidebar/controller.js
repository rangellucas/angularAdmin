var indexApp = angular.module("mainApp");
indexApp.controller('CtrlSidebarLeft',['$scope', function($scope) {
 	
 	$scope.menus = [{
		nome:'Index',
		icone:'fa-home',
		id:'index',
		link:'index',
		submenu:false
	},
	{
		nome:'Bootstrap',
		icone:'fa-code',
		id:'bootstrap',
		link:'',
		submenu:[{
			nome:'Elements',
			link:'index.elements',
			icone:'fa fa-birthday-cake',
		},{
			nome:'Forms',
			link:'index.forms',
			icone:'fa fa-list-alt',
		}]
	}];
 	
}]);

indexApp.controller('CtrlSidebarTop',['$scope', function($scope) {
 	
 	$scope.perfil = {nome:"User"};

 	$scope.menu={toggled:""};

 	$scope.menuToggle = function(){
		if($scope.menu.toggled=="") $scope.menu.toggled = "toggled";
		else $scope.menu.toggled="";
	}

	$scope.$watch(function(){
	   return window.innerWidth;
	}, function(value) {
	   if(value<=768){
	   	$scope.menu.toggled = "toggled";
	   }
	}); 

}]);