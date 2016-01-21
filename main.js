angular.module('NSA', []);

angular.module('NSA')
	.controller('metricCollector', ['$scope', function($scope) {

	$scope.eventLog = [];

	$scope.recordEvent = function(event) {
		$scope.eventLog.push(event);
		console.log(event);
	}

	$scope.processEvent = function(event) {
		var result = 'type: ' + event.type
		result += ' clientX: ' + event.clientX + ' clientY: ' + event.clientY
		result += ' timestamp: ' + event.timeStamp
		result += ' movementX: ' + event.movementX + ' movementY: ' + event.movementY
		return result;
	}
}])