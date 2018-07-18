(function () {
    'use strict';

    var app = angular.module('app');

    // Collect the routes
    app.constant('routes', getRoutes());
    
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
            }
        ];
    }
})();