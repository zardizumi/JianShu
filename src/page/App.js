import React, { Component } from 'react';
import {HashRouter as Router,Route} from 'react-router-dom'
import TopNav from './TopNav'
import One from './One'
import Two from './Two'
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <div>
                            <TopNav/>
              <Route exact={true} path='/one' component={One}></Route>
              <Route exact={true} path='/two' component={Two}></Route>

              </div>
          </Router>
      </div>
    );
  }
}

export default App;
