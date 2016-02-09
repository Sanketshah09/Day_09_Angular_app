( function() {
		angular.module("app", ["ngRoute"]).config(function($routeProvider) {
			$routeProvider.when("/", {
				controller : "hercontroller",
				templateUrl : "com/sanket/views/hero.html"
			}).when("/home", {
				controller : "moviecontroller",
				templateUrl : "com/sanket/views/movie.html"
			});
		});

	}());
