angular.module('NSA', []);

angular.module('NSA')
	.controller('metricCollector', ['$scope', function($scope) {

	$scope.dataLog = [];

	$scope.recordClick = function(event) {
		scope.dataLog.push(event);
	}

	$scope.recordDblClick= function(event) {
		scope.dataLog.push(event);
	}

	$scope.recordKeyDown = function(event) {
		scope.dataLog.push(event);
	}

	$scope.recordKeyUp = function(event) {
		scope.dataLog.push(event);
	}

	$scope.recordMouseDown = function(event) {
		scope.dataLog.push(event);
	}

	$scope.recordMouseUp = function(event) {
		scope.dataLog.push(event);
	}

}])