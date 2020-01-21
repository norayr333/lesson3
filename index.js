var express = require("express");
var app = express();

app.get("/shlorikompot", function(req, res){
   res.send("Hello shlorikompot");
});
app.get("/name/:name", function(req, res){
   var name = req.params.name;
   res.send("<h1>Hello " + name +"</h1>");

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
