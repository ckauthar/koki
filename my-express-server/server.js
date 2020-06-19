//jshint esversion:7

const express = require("express");

const app =  express();

app.get("/", function(request, response) {
    response.send("<h1>Hello World</h1>");
});

app.get("/contact", function(request, response) {
    response.send("Contact Me @: ckauthar27@gmail.com");
});

app.get("/about", function(request, response) {
    response.send("A qualified Customer Engineer, with 3 years and 6 months experience, at Absa Regional Offices. Learning Front-end Web Development, to upskill myself and advance within my IT career.");
});

app.get("/hobbies", function(request, response) {
    response.send("<ul><li>Coding</li><li>Music</li></ul>");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});

