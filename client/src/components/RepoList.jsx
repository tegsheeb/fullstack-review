import React from 'react';
import RepoItem from './RepoItem.jsx'

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    Here is top 25 .
    <div>
      

    </div>

  </div>
)

export default RepoList;