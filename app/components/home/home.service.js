(function(){
	angular.module('gallery.home')

	.factory('homeService', ['$http', function($http){
		return {
			getMovies: function(){
				var promise;

				promise = $http.get('mock/movies.json').then(function(response){
					return response.data;
				});

				return promise;
			}
		}
	}]);
})();
