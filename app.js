var express = require("express");
var app = express();
var path = require("path");
var formRouter = require('./routes/formRouter');

app.use(express.static(__dirname + "/public"));
app.use('/formSubmit', formRouter);
app.set("view engine", "ejs");


app.get("/", function(req, res) {
	res.render('template');
});

app.get("/iform", function(req, res) {
	res.sendFile(path.join(__dirname+'/views/form.html'));
});

app.get("*", function(req, res) {
	res.send("Sorry, that's not a valid url.");
});

// Tell Express to listen for requests (start server)
app.listen(3000, function() {
	console.log("Server has started.");
});
