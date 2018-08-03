(function() {
	'use strict';
	
	
	//Angular 
	var app = angular.module('app', [
		// Angular modules 
	    'ngAnimate',        // animations
	    'ngRoute'          // routing
	]);
	
	app.run(['routemediator', function(routemediator){
		routemediator.setRoutingHandlers();
	}]);
	
})();
