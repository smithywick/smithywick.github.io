app.factory('bbdata', ['$http', function($http) { 
  return $http.get('json/bbdata.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
