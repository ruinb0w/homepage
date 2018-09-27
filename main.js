// import express for route
const Express = require('express');
var express = Express();

const path = require("path"); 

express.use(Express.static('static'));

express.get("/", function(req,res){
  res.redirect("/home");
});
express.get("/home", function(req,res){
  res.sendFile(path.join(__dirname, "static/pages/home.html"));
});
express.get("/practice", function(req,res){
  res.sendFile(path.join(__dirname, "static/pages/practice.html"));
});
express.get("/blog", function(req,res){
  res.sendFile(path.join(__dirname, "static/pages/blog.html"));
});
express.get("/about", function(req,res){
  res.sendFile(path.join(__dirname, "static/pages/about.html"));
});
express.use(function(req,res){
  res.sendFile(path.join(__dirname, "static/pages/404.html"))
});
express.listen(3000,"192.168.0.104");


