(function() {
	'use strict';
	
	
	//Angular 
	var app = angular.module('app', [
		// Angular modules 
	    'ngAnimate',        // animations
	    'ngRoute'          // routing
	]);
	
	app.run(['$route','routemediator', function($route, routemediator){
		routemediator.setRoutingHandlers();
	}]);
	
})();
