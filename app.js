var express = require("express");
var app = express();
var path = require("path");


app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");


app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname+'/views/template.html'));
});

app.get("/form", function(req, res) {
	res.sendFile(path.join(__dirname+'/views/form.html'));
});

app.get("*", function(req, res) {
	res.send("Sorry, that's not a valid url.");
});

// Tell Express to listen for requests (start server)
app.listen(3000, function() {
	console.log("Server has started.");
});