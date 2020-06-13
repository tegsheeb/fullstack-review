const express = require('express');
let app = express();
const bodyParser = require('body-parser')
const getReposByUsername = require('../helpers/github.js')
const db = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  getReposByUsername.getReposByUsername(req, res)
  });


app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.getData(req, res);
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening port at ${port}`);
});

