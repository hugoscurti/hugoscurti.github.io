(function () {
    'use strict';

    var serviceId = 'routemediator';

    angular.module('app').factory(serviceId, ['config', '$rootScope', '$location', 'logger', routemediator]);

    function routemediator(config, $rootScope, $location, logger) {
        // Define the functions and properties to reveal.
        var handleRouteChangeError = false;

        var service = {
            setRoutingHandlers: setRoutingHandlers
        };

        function setRoutingHandlers() {
            updateDocTitle();
            handleRoutingErrors();
        }

        return service;

        function handleRoutingErrors() {
            $rootScope.$on('$routeChangeError',
                function (event, current, previous, rejection) {
                    if (handleRouteChangeError) { return; }
                    handleRouteChangeError = true;
                    var msg = 'Error routing : ' + (current && current.name) + '. ' + (rejection.msg || '');
                    logger.logWarning(msg, current, serviceId, true);
                    $location.path('/');
                });
        }

        function updateDocTitle() {
            $rootScope.$on('$routeChangeSuccess',
                function (event, current, previous) {
                    handleRouteChangeError = true;
                    var title = config.docTitle + ' ' + (current.title || '');
                    $rootScope.title = title;
            });
        }

        //#region Internal Methods        

        //#endregion
    }
})();