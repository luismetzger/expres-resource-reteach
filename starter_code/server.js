'use strict'
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var candies = [
  {
    "id": 1,
    "name": "Chewing Gum",
    "color": "Red"
  },
  {
    "id": 2,
    "name": "Pez",
    "color": "Green"
  },
  {
    "id": 3,
    "name": "Marshmallow",
    "color": "Pink"
  }
];

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.get('/candies', function(req, res) {
    res.send(candies);
});

app.get('/candies/:id', function(req, res) {
    var candies_id = candies[req.params.id];
    if(candies.length <= req.params.id || req.params.id < 0 || req.params.id === undefined) {
        res.statusCode = 404;
        return res.send('Error 404: No candy found');
    }
    res.send(candies_id);
});

app.post('/candies', function(req, res) {
    var newCandy = {
        "id" : req.body.id,
        "name" : req.body.name,
        "color" : req.body.color
    }
    candies.push(newCandy);
    res.json(true);
});

app.post('/candies', function(req, res) {
    var newCandy = {
        "name" : req.body.name,
        "color" : req.body.color
    }
    candies.push(newCandy);
    res.json(true);
});

app.put('/candies/:id', function(req, res) {
    

});


app.listen(3000)
console.log("Server listening on port 3000")
