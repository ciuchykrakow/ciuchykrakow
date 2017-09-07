import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from './views/header/Header'
import Main from './views/main/Main'
import MapSection from './views/map/MapSection'

const sites = [
  { name: 'Aktualności', path: '/' },
  { name: 'Sklepy', path: '/sklepy' }
]

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header sites={sites} />

          <Route exact path='/' component={Main} />
          <Route exact path='/sklepy' component={MapSection} />
        </div>
      </Router>
    );
  }
}

export default App;
