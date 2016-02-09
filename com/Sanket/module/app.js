( function() {
		angular.module("app", ["ngRoute"]).config(function($routeProvider) {
			$routeProvider.when("/hero", {
				controller : "hercontroller",
				templateUrl : "com/sanket/views/hero.html"
			}).when("/movies", {
				controller : "moviecontroller",
				templateUrl : "com/sanket/views/movies.html"
			});
		});

	}());
