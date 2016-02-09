( function() {		
		angular.module("app", ["ngRoute"]).config(function($routeProvider) {
			$routeProvider.when("/hero", {
				controller : "herocontroller",
				templateUrl : "com/Sanket/views/hero.html"
			}).when("/movies/:hid", {
				controller : "moviecontroller",
				templateUrl : "com/Sanket/views/movies.html"
			});
		});

	}());
