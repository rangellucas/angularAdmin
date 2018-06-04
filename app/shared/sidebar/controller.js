var indexApp = angular.module("mainApp");
indexApp.controller('CtrlSidebarLeft',['$scope', function($scope) {

 	$scope.menus = [{
		nome:'Graphs',
		icone:'fa-area-chart',
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
		},{
			nome:'Tables',
			link:'index.tables',
			icone:'fa fa-table',
		}]
	}];

}]);

indexApp.controller('CtrlSidebarTop',['$scope', function($scope) {

 	$scope.perfil = {nome:"Usuário"};

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
