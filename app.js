var express = require("express");
var app = express();
var path = require("path");

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname+'/views/form.html'));
});

// Tell Express to listen for requests (start server)
app.listen(3000, function() {
	console.log("Server has started.");
});