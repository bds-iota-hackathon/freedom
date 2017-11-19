angular.module('MyApp')
    .controller('DoctorsCtrl', function($scope, $http) {


        $http.get('/doctors').then(function(response){
            $scope.values = response.data;
        });

    });