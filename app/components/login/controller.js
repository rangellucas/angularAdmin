var mainApp = angular.module("mainApp");
mainApp.controller('Login', function($scope, Auth) {
 	
	//$scope.message = "Login";
	$scope.login = function () {
		Auth.loginUser($scope); //Update the state of the user in the app
	};

});