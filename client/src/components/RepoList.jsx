import React from 'react';
import RepoItem from './RepoItem.jsx'


const RepoList = (props) => {
  return (
    <div>
      <h4> Top 25 Repos List</h4>
      {/* <div>There are {props.repos.length} repos. </div> */}
      <div>
        {props.repos.map(repo =>
          <RepoItem key ={repo._id} repo={repo}/>)}
      </div>

    </div>

  )
}

export default RepoList;