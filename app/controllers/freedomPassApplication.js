angular.module('MyApp')
    .controller('FreedomPassApplicationCtrl', function($scope, FreedomPassApplication) {

        //$scope.foo = 'bar';

        $scope.sendFreedomPassApplication = function() {

            $scope.loading = true;
            $scope.creatingDoctor = true;
            $scope.creatingCertificate = true;

            FreedomPassApplication.send($scope.freedomPassApplication)
                .then(function(response) {
                    $scope.messages = {
                        success: [response.data]
                    };
                    $scope.loading = false;
                    $scope.creatingDoctor = false;
                    $scope.creatingCertificate = false;
                })
                .catch(function(response) {
                    $scope.messages = {
                        error: Array.isArray(response.data) ? response.data : [response.data]
                    };
                    $scope.loading = false;
                    $scope.creatingDoctor = false;
                    $scope.creatingCertificate = false;
                });
        };
    });