require.config({
    paths: {
        'jquery': 'lib/jquery-2.0.3.min',
        'jquery.bootstrap' : 'lib/bootstrap.min',
        'jquery.sammy' : 'lib/sammy-latest.min'
    },
    
    shim: {
        "jquery.bootstrap": {
            deps: ['jquery']
        },
        "jquery.sammy" : {
            deps: ['jquery']
        }
    }
});


require(["jquery", "jquery.sammy", "jquery.bootstrap"], function($, sammy){
    //Client-side routes
    var app = sammy(function () {

        var notFoundContent = 
            "<div class='jumbotron'>" + 
                "<span style='color: red; font-weight: bold;'>Erreur : cette page n'existe pas.</span>" + 
            "</div";

        //Custom made functions
        var handleLoad = function(response, status, xhr) {
            if (status == "error") {
                // handle error
                loadContent(notFoundContent);
            }
            else
            {
                $(this).fadeTo(200, 1);
            }
        };

        var loadContentFromPath = function (pathToContent) {
            var container = $("#main");
            if(container.is(":empty")){
                container.load(pathToContent, handleLoad);
            }else{
                container.fadeTo(200, 0, function() {
                    container.load(pathToContent, handleLoad);
                });
            }
        };

        var loadContent = function (content) {
            var container = $("#main");
            if(container.is(":empty")){
                container.html(content).fadeTo(200, 1);
            }else{
                container.fadeTo(200, 0, function() {
                    container.html(content).fadeTo(200, 1);
                });
            }
        };
        
        var baseUrl = "/~ch891311";
        
        this.get("^" + baseUrl + "/$", function () {
            loadContentFromPath("pages/home/");
        });
        
        this.get("^" + baseUrl + "/#/:page/?$", function () {
            if (/^(#.*|\.{1,2})$/.test(this.params.page)) {
                loadContent(notFoundContent);
            } else {
                loadContentFromPath("pages/" + this.params.page + "/");
            }
        });

        this.get("^" + baseUrl + "/#/$", function () {
            loadContentFromPath("pages/home/");
        });
        

        this.get("^" + baseUrl + "/index.html", function () {
            this.redirect(baseUrl + "/#/");
            // loadContentFromPath("pages/home");
        });

        this.notFound = function(){
            loadContent(notFoundContent);
        };
        
    })
    
    $(function() {

        $("#navbar-collapse-1 li a").not(".dropdown-toggle").click(function(event) {
            // check if window is small enough so dropdown is created
            var buttonToggle = $("button[data-target='#navbar-collapse-1']");
            if(!(buttonToggle.hasClass("collapsed") || buttonToggle.is(":hidden"))){
                $("#navbar-collapse-1").collapse("hide");
            }
            $("#navbar-collapse-1 li.dropdown.open a.dropdown-toggle").dropdown("toggle");
        });

        app.run();
    });
});
