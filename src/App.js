import React, { Component } from 'react';
import './App.css';
import MountainContainer from './MountainContainer';

class App extends Component {
  constructor() {
    super();

    this.state = {mountains: [
        {
          peakName: 'Mt. Evans'
        },
        {
          peakName: 'Long\'s Peak'
        }
      ]}
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Favorite Mountain</h1>
          <p>Where You Can Favorite Your Favorite Mountain</p>
        </header>

        <MountainContainer mountains={this.state.mountains} />
      </div>
    );
  }
}

export default App;
