angular.module('MyApp')
  .controller('HeaderCtrl', function($scope, $location, $window) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
    
    $scope.isAuthenticated = function() {
      return true;
    };
    
    $scope.logout = function() {
      //$auth.logout();
      delete $window.localStorage.user;
      $location.path('/');
    };
  });
