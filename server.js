var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

var locations=[];

app.listen(port, 
	() => {
		console.log("Server running on port " + port);
	});

app.get("/", (req, res) => {
	res.send(locations);
});

app.post("/new_location", (req, res) => {
	locations.add(req);
})