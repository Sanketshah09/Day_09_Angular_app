(function(){
	angular.module("app")
	.controller("moviecontroller", function($scope, $routeParams, dataservice){
		$scope.data = dataservice.getData();
		
		$scope.movies = null;
		$scope.selectedHero = $routeParams.hid;		
		function listMovies(){
			$scope.movies = $scope.data.heros[$scope.selectedHero-1].movieslist;
		}
		listMovies();		
	});
}());