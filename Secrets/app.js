//jshint esversion:6
require('dotnev').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;


const app = express();

console.log("weak password hash: " + md5("123456"));
console.log("strong password hash: " + md5("sjkhdfsd8f7jhsd$%$sdfHJKHSJFHDSF78324"));

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true});

const userSchema = new mongoose.Schema ({
    email: String,
    password: String
});



const User = new mongoose.model("User", userSchema);

app.get("/", function(req, res) {
   res.render("home");
});

app.get("/login", function(req, res) {
    res.render("login");
 });

 app.get("/register", function(req, res) {
     res.render("register");
 });

 app.post("/register", function(req, res) {
     
  
 });

 app.post("/login", function(req, res) {
    
 });

app.listen(3000, function() {
  console.log("Server started on port 3000");
});