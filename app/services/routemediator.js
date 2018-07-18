(function () {
    'use strict';

    var serviceId = 'routemediator';

    angular.module('app').factory(serviceId, ['$rootScope', routemediator]);

    function routemediator($rootScope) {
        // Define the functions and properties to reveal.
        var service = {
            setRoutingHandlers: setRoutingHandlers
        };

        function setRoutingHandlers() {
            updateDocTitle();
            hideDropDownOnRouteChange();
        }

        return service;

        //#region Internal Methods        
        function updateDocTitle() {
            $rootScope.$on('$routeChangeSuccess',
                function (event, current, previous) {
                    var title = 'Hugo Scurti: ' + (current.title || '');
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