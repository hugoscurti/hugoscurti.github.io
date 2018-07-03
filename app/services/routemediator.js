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
            hideDropDownOnRouteChange();
        }

        return service;

        //#region Internal Methods        
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

        function hideDropDownOnRouteChange() {
            $rootScope.$on('$routeChangeStart',
                function (event, current, previous) {
                    //Hide the menu if visible
                    var buttonToggle = $("button[data-target='#navbar-collapse-1']");
                    if (!buttonToggle.is(":hidden") && !$("#navbar-collapse-1").is(':hidden')) {
                        $("#navbar-collapse-1").collapse("hide");
                    }
            });
        }
        //#endregion
    }
})();