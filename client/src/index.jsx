import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO

    $.ajax({
      method:'POST',
      url: '/repos',
      data: {'username': term}
    })
      .done(
        // () => {console.log('succesfully posted data');}
        () => {this.get();}
      )
      .fail(
        (jqXHR, textStatus) => {console.log(textStatus)}
      )
  }

  get() {
    $.get('/repos', (data) => {
      this.setState (repos: data);
    })
  }


  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));