/* require 2 routes:
    - GET to /survey to display survey page
    - default/catch all route that goes to home page
    */

//Routes ----------------------------------------------
var path = require("path");

module.exports = function(app){
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}
