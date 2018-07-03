(function() {
	'use strict';
	
	
	//Angular 
	var app = angular.module('app', [
		// Angular modules 
	    'ngAnimate',        // animations
	    'ngRoute',          // routing
	
	    // Custom modules 
	    'common',           // common functions, logger, spinner
	    'common.bootstrap', // bootstrap dialog wrapper functions
	
	    // 3rd Party Modules
	    'ui.bootstrap',      // ui-bootstrap (ex: carousel, pagination, dialog)
	]);
	
	app.run(['$route','routemediator', function($route, routemediator){
		routemediator.setRoutingHandlers();
	}]);
	
})();
