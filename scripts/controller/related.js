'use strict';
angular.module("myApp").controller('relatedController', function($scope, $http) {

	$http.get("data/videodata.json").then(function (response) {$scope.videos = response.data.videos;});
	$scope.removeItem = function (x) {$scope.videos.splice(x, 1);};
	
});


