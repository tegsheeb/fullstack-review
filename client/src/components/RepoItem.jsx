import React from 'react';

const RepoItem = (props) => {
  return (
    <div>
      <div>Name:  {props.repo.repo_name} </div>
      <div>Number of Forks:  {props.repo.fork_counts} </div>
    </div>
  )

}

export default RepoItem;