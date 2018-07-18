(function() {
    'use strict';

    var app = angular.module('app');

    app.directive('notFound', function () {
    	
    	var directive = {
    		template : "<div class='jumbotron'>" + 
			            	"<span style='color: red; font-weight: bold;'>Error : this page doesn't exist.</span>" + 
			        	"</div>",
        	restrict: 'E'
    	};
    	
    	return directive;
    });
})();