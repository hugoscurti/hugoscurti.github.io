(function () {
    'use strict';

    var serviceId = 'helper';
    angular.module('app').factory(serviceId, ['$location', 'common', helper]);

    function helper($location, common) {
        var service = {
        };

        return service;
        
        
        //Legacy functions. Might not be needed with angular
        function loadContent(content) {
            var container = $("#main");
            if(container.is(":empty")){
                container.html(content).fadeTo(200, 1);
            }else{
                container.fadeTo(200, 0, function() {
                    container.html(content).fadeTo(200, 1);
                });
            }
        }
        
		function loadContentFromPath(pathToContent) {
            var container = $("#main");
            if(container.is(":empty")){
                container.load(pathToContent, handleLoad);
            } else {
                container.fadeTo(200, 0, function() {
                    container.load(pathToContent, handleLoad);
                });
            }
        }
        
        function handleLoad(response, status, xhr) {
            if (status == "error") {
                // handle error
                loadContent(notFoundContent);
            } else {
                $(this).fadeTo(200, 1);
            }
        }

    }

})();