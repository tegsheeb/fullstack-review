const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb://localhost/fetcher', { useMongoClient: true});

// to drop the whole database
// , function() { mongoose.connection.db.dropDatabase() }
// connection.dropDatabase();

// mongoose.connect('mongodb://localhost/fetcher');
// connection.db.

let repoSchema = mongoose.Schema({
  repo_id: {type: String, unique: true, required: true},
  repo_name: String,
  html_url: String,
  repo_description: String,
  fork_counts: Number,
  updated_at: String,
  owner_username: String,
});


let Repo = mongoose.model('Repo', repoSchema);

// data is list from res.data and List of objects


module.exports = {

  save: (data) => {
    // TODO: Your code here
    // This function should save a repo or repos to
    // the MongoDB

    console.log('this is data from save{}', data.data[0]);
    let arrayGitRepos = data.data;

    arrayGitRepos.map(ele => {
      let repo = new Repo ({
        repo_id: ele.id,
        repo_name: ele.name,
        html_url: ele.html_url,
        repo_description: ele.description,
        fork_counts: ele.forks,
        updated_at: ele.updated_at,
        owner_username: ele.owner.login,
      })

      repo.save( (err, arrayGitRepos) => {
        if(err) {
          // callback(err);
          return console.log(err);
        } else {
          // callback(arrayGitRepos);
          console.log(arrayGitRepos);
        }
      })

    })

  },

  // getting 25 repos sorted by fork number
  getData: (req, res) => {
    Repo
    .find({})
    .sort('-fork_counts')
    .limit(25)
    .exec(function(err, result) {
      if (err) {
        console.log(err);
        res.status(400);
        res.send(err);
      } else {
        console.log(result);
        res.status(200);
        res.send(result)
      }
    })
  }
}
