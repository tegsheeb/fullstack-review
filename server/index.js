const express = require('express');
let app = express();
const bodyParser = require('body-parser')
const getReposByUsername = require('./../helpers/github.js')

app.use(express.static(__dirname + '/../client/dist'));

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  // console.log(req.body.username);
  // console.log(getReposByUsername);
  getReposByUsername.getReposByUsername(req, res)
  });
  // res.send('recieved a request');

  // (err, data) => {
  //   if(err) {
  //     res.send(err);
  //   } else {
  //     res.send(data);
  //   }
  // }

// });

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

let type = typeof getReposByUsername;


app.listen(port, function() {
  console.log(`listening on port ${port} and ${type}`);
});

