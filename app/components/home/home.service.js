(function(){
	angular.module('gallery.home')

	.factory('homeService', ['$http', function($http){
		return {
			getMovies: function(term){
				var promise;

				promise = $http.get('http://www.omdbapi.com/?s=' + term.trim().replace(/ /g, '+')).then(function(response){
					console.log(response);
					return response.data;
				});

				return promise;
			}
		}
	}]);
})();
