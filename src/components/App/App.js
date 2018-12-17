import React, { Component } from 'react';
import './App.css';
import Admin from '../Admin/Admin';
import Home from '../Home/Home';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Admin />
        <Home />
      </div>
    );
  }
}

export default App;
