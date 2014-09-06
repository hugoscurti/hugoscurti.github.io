(function() {
    'use strict';

    var app = angular.module('app');

    app.directive('notFound', ['config', function (config) {
    	
    	var directive = {
    		template : "<div class='jumbotron'>" + 
			            	"<span style='color: red; font-weight: bold;'>Erreur : cette page n'existe pas.</span>" + 
			        	"</div>",
        	restrict: 'E'
	        
        	
    	};
    	
    	return directive;
    	 
    }]);
    
})();