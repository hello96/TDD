import React, { Component } from 'react';
import Wallet from './components/Wallet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Loot Check</h1>
        <hr />
        <Wallet />
      </div>
    );
  }
}

export default App;
