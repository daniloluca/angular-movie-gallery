(function(){
	angular.module('gallery.movieThumbnail', [])

	.directive('movieThumbnail', function(){
		return {
			restrict: 'E',
			templateUrl: 'app/shared/movieThumbnail/movieThumbnail.view.html',
			scope: {
				movie: '='
			}
		}
	});
})();
