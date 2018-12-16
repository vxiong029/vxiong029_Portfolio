import React, { Component } from 'react';
import './App.css';
import Admin from '../Admin/Admin';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <p>Empty Page</p>
        <Admin />
      </div>
    );
  }
}

export default App;
