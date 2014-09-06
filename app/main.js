

require(["jquery", "jquery.sammy", "jquery.bootstrap"], function($, sammy){
    //Client-side routes
    var app = sammy(function () {

        //Custom made functions      
        
        
        var baseUrl = "/personal-spa";
        
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
        
    });
});
