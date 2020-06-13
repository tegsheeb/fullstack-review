import React from 'react';

const RepoItem = (props) => {
  return (
    <div>
      <div>Repo Name:  {props.repo.repo_name}, Owner: {props.repo.owner_username}, Forks: {props.repo.fork_counts}</div>
    </div>
  )
}

export default RepoItem;