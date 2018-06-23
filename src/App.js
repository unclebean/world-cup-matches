import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import TodayMatches from './containers/TodayMatches';
import AllMatches from './containers/AllMatches';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="tabs is-centered">
          <ul>
            <li><NavLink exact activeClassName="active-link" to='/'>Today Matches</NavLink></li>
            <li><NavLink activeClassName="active-link" to='/allMatchs'>All Matchs</NavLink></li>
          </ul>
        </div>
        <div>
          <Switch>
            <Route exact path='/' component={TodayMatches}/>
            <Route path='/allMatchs' component={AllMatches}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
