app.controller('mainController', ['$scope', function($scope) {
  $scope.apps = [ 
	  { 
	    icon: 'http://pisces.bbystatic.com/image2/BestBuy_US/images/products/4221/4221508_sa.jpg', 
	    title: 'MOVE', 
	    developer: 'MOVE, Inc.', 
	    price: 0.99 
	  }, 
	  { 
	    icon: 'http://pisces.bbystatic.com/image2/BestBuy_US/images/products/4221/4221508_sa.jpg', 
	    title: 'Shutterbugg', 
	    developer: 'Chico Dusty', 
	    price: 2.99 
	  },
	  {
	    icon: 'http://pisces.bbystatic.com/image2/BestBuy_US/images/products/4221/4221508_sa.jpg',
	    title: 'Gameboard',
	    developer: 'Armando P.',
	    price: 1.99
	  },
	  {
	    icon: 'http://pisces.bbystatic.com/image2/BestBuy_US/images/products/4221/4221508_sa.jpg',
	    title: 'Forecast',
	    developer: 'Forecast',
	    price: 1.99
	  }
	];
}]);
