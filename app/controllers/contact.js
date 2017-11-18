angular.module('MyApp')
  .controller('ContactCtrl', function($scope, TransactionRequest) {

      $scope.foo = 'bar';





      $scope.sendContactForm = function() {
      TransactionRequest.send($scope.transactionRequest)
        .then(function(response) {
          $scope.messages = {
            success: [response.data]
          };
        })
        .catch(function(response) {
          $scope.messages = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    };
  });
