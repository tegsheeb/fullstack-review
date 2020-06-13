const axios = require('axios');
const config = require('../config.js');
const save = require('../database/index.js');


const getReposByUsername = (req, res) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let name = req.body.username;
  console.log('from github.js', name);
  let options = {
    method: 'get',
    url: `https://api.github.com/users/${name}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  axios(options)
    .then((data) => {
      // console.log(Object.keys(res));
      // =>  'status', 'statusText', 'headers', 'config', 'request', 'data' ]
      console.log(data.data[0]);
      save.save(data);
      res.send('got data from API and saving to DB')
    })
    .catch((error) => {
      res.status(400);
      res.send('Failed to get data from API');
    })
}

module.exports.getReposByUsername = getReposByUsername;