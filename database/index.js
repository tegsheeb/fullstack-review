const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb://localhost/fetcher');

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
});


let Repo = mongoose.model('Repo', repoSchema);

// data is list from res.data and List of objects
let save = (data) => {
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
      updated_at: ele.updated_at
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

}

module.exports.save = save;

