angular.module('MyApp')
    .controller('DoctorsCtrl', function($scope, $http) {


        $http.get('/applist').then(function(response){

            $scope.values = response.data;
        });

    });