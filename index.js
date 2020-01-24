var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("<h1>Hello world</h1>");
});
app.get("/google/:search", function(req, res){
   var name = req.params.name;
   var search = req.params.search;
   
   res.redirect(302,'https://www.google.com/search?q='+ search);
   
   
});
app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
