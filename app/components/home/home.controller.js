(function(){
	angular.module('gallery.home', [])

	.controller('homeCtrl', ['$scope', 'homeService', function($scope, homeService){
		homeService.getMovies().then(function(movies){
			$scope.movies = movies;
		});
	}]);
})();
