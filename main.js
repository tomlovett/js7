angular.module('NSA', []);

angular.module('NSA')
	.controller('metricCollector', ['$scope', function($scope) {

	$scope.eventLog = [];
	$scope.data = {
		'init timestamp': null, 'time elapsed': 0,
		'events': 0, 'clicks': 0,
		'X movement': 0, 'Y movement': 0,
		'keydowns': 0, 'keyups': 0
	};

	$scope.recordEvent = function(event) {
		$scope.eventLog.push(event);
		// console.log(event);
		$scope.data['events'] += 1

		if ($scope.eventLog.length == 1) { $scope.data['init timestamp'] = event.timeStamp; 
		} else {
			$scope.data['time elapsed'] = event.timeStamp - $scope.data['init timestamp'];
		}

		if (event.type == 'keyup') { $scope.data.keyups += 1; }
		else if (event.type == 'keydown') { $scope.data.keydowns += 1; }
		else if (event.type == 'click') { $scope.data['clicks'] += 1; }
		else if (event.type == 'dblclick') { $scope.data['clicks'] += 2; }
		else {
			$scope.data['X movement'] += Math.abs(event.movementX);
			$scope.data['Y movement'] += Math.abs(event.movementY);
		if ($scope.eventLog.length % 10 == 0) { console.log($scope.data); }
		}
	}

	$scope.processEvent = function(event) {
		var result = 'type: ' + event.type
		result += ' clientX: ' + event.clientX + ' clientY: ' + event.clientY
		result += ' timestamp: ' + event.timeStamp
		result += ' movementX: ' + event.movementX + ' movementY: ' + event.movementY
		return result;
	}

}])