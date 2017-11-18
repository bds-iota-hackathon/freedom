angular.module('MyApp')
  .controller('TransactionCtrl', function($scope, TransactionRequest) {

      //$scope.foo = 'bar';

      $scope.sendTransactionRequestForm = function() {
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
