app.controller('mainController', ['$scope', 'bbdata', function($scope, bbdata) { 
  bbdata.success(function(data) { 
    $scope.bbdata = data; 
  });
}]);