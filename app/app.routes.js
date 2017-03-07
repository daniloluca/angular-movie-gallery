(function(){
	angular.module('gallery.routes', ['ui.router'])

	.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/home');

		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'app/components/home/home.view.html',
			controller: 'homeCtrl'
		});
	});
})();
