angular.module('MyApp')
  .factory('FreedomPassApplication', function($http) {
    return {
      send: function(data) {
        return $http.post('/freedompassapplication', data);
      }
    };
  });