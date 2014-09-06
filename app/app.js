(function() {
	'use strict';
	
	$("#navbar-collapse-1 li a").not(".dropdown-toggle").click(function(event) {
        // check if window is small enough so dropdown is created
        var buttonToggle = $("button[data-target='#navbar-collapse-1']");
        if(!(buttonToggle.hasClass("collapsed") || buttonToggle.is(":hidden"))){
            $("#navbar-collapse-1").collapse("hide");
        }
        $("#navbar-collapse-1 li.dropdown.open a.dropdown-toggle").dropdown("toggle");
    });
	
	//Angular 
	var app = angular.module('app', [
		// Angular modules 
	    'ngAnimate',        // animations
	    'ngRoute',          // routing
	    'ngSanitize',       // sanitizes html bindings (ex: sidebar.js)
	
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
