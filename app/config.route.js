(function () {
    'use strict';

    var app = angular.module('app');

    // Collect routes
    app.constant('routes', getRoutes());

    // Set up directive for default "not found" page
    app.directive('notFound', function () {
    	return {
    		template : "<div class='jumbotron'>" + 
			            	"<span style='color: red; font-weight: bold;'>Error : this page doesn't exist.</span>" + 
			        	"</div>",
        	restrict: 'E'
    	};
    });
    
    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', routeConfigurator]);

    function routeConfigurator($routeProvider, routes) {

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });

        $routeProvider.otherwise({
        	title: 'Not found',
        	template: '<not-found />' 
    	});
    }

    // Define the routes 
    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'pages/home.html',
                    title: 'Home',
                    settings: {
                        nav: 1,
                        content: ''
                    }
                }
            }, {
                url: '/contact',
                config: {
                    title: 'Contact',
                    templateUrl: 'pages/contact.html',
                    settings: {
                        nav: 2,
                        content: ''
                    }
                }
            }, {
                url: '/projects',
                config: {
                    title: 'Projects',
                    templateUrl: 'pages/projects.html'
                }
            }
        ];
    }
})();