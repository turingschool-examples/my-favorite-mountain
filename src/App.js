import React, { Component } from 'react';
import './App.css';
import MountainContainer from './MountainContainer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      mountains: [],
      myFavoriteMountain: null
    }
  }

  componentDidMount() {
    fetch('https://my-mountains.herokuapp.com/api/v1/mountains')
      .then(response => response.json())
      .then(json => this.setState({mountains: json}))
      .catch(err => console.error(err));
  }

  setFavoriteMountain = event => {
    let mountainName = event.target.parentElement.firstChild.innerText;
    this.setState({myFavoriteMountain: mountainName});
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>My Favorite Mountain</h1>
          <h3>Where You Can Favorite Your Favorite Mountain</h3>
        </div>

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
