/** 
 * An Alert Directive For Angular
 */
 angular.module('angular-alerts', []).directive('alert', function() {
 	return {
		restrict: "EA",
		templateUrl: "bower_components/angular-alerts/templates/alert.html",
		transclude: true,
		replace: true,
	   scope: {
	     type: '@',
	     close: '&'
	   }		
 	}
 });