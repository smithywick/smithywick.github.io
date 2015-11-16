app.factory('bbdata', ['$http', function($http) { 
  return $http.get('http://www.bestbuy.com/api/1.0/product/summaries?skus=1107008,1581921&includeInactive=false') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);