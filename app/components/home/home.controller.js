(function(){
	angular.module('gallery.home', [])

	.controller('homeCtrl', ['$scope', 'homeService', function($scope, homeService){
		homeService.getMovies('Star Wars ').then(function(movies){
			$scope.movies = movies.Search;
		});
	}]);
})();
