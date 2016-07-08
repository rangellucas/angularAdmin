var indexApp = angular.module("mainApp");
indexApp.directive('loadpage', function() {
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: 'app/shared/loadpage/view.html'
  };
});