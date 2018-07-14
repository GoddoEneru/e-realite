import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import { Home } from './Home';
import { Voyages } from './Voyages';
import { Videos } from './Videos';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
              <Route exact path="/" component={Home}/>
              <Route exact path="/Voyages" component={Voyages}/>
              <Route exact path="/Videos" component={Videos}/>
          </div>
        </Router>
    );
  }
}

export default App;
