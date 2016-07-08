var indexApp = angular.module("mainApp");
indexApp.directive('sidebarTop', function() {
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: 'app/shared/sidebar/sidebar-top.html'
  };
});
indexApp.directive('sidebarLeft', function() {
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: 'app/shared/sidebar/sidebar-left.html'
  };
});