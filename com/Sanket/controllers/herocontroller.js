(function(){
	angular.module("app")
	.controller("herocontroller", function($scope, dataservice){
		$scope.data = dataservice.getData();		
	});
}());
