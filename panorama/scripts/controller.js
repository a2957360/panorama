// controller
var app = function(app) {

    app.makeController = function(m, v, p) {

        v.btn1.on("click", function() {
            window.location.href="sunset.html"
        });

        v.btn2.on("click", function() {
            window.location.href="sky.html"
        });

    }

    return app;
}(app || {});