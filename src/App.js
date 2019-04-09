import React, { Component } from 'react';
import './App.css';
import MountainContainer from './MountainContainer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      mountains: [
        {
          id: 1,
          peakName: 'Mt. Evans'
        },
        {
          id: 2,
          peakName: 'Long\'s Peak'
        }
      ],
      myFavoriteMountain: null
    }
  }

  setFavoriteMountain = event => {
    let mountainName = event.target.parentElement.firstChild.innerText;
    this.setState({myFavoriteMountain: mountainName});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Favorite Mountain</h1>
          <p>Where You Can Favorite Your Favorite Mountain</p>
        </header>

        <MountainContainer 
          mountains={this.state.mountains}
          myFavoriteMountain={this.state.myFavoriteMountain}
          setFavoriteMountain={this.setFavoriteMountain}
        />
      </div>
    );
  }
}

export default App;
