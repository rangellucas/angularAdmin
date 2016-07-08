var indexApp = angular.module("mainApp");
indexApp.directive('msgAlert', function() {
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: 'app/shared/alert/view.html'
  };
});