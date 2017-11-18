angular.module('MyApp')
  .factory('TransactionRequest', function($http) {
    return {
      send: function(data) {
        return $http.post('/transactionrequest', data);
      }
    };
  });