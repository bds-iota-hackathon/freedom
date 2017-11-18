angular.module('MyApp')
    .controller('ListCtrl', function($scope, $http) {


        $http.get('/applist').then(function(response){

            $scope.values = response.data;
        });

    });