import React, {Component} from 'react';
import './Mountain.css';

class Mountain extends Component {
  render() {
    if (this.props.myFavoriteMountain === this.props.peakName) {
      return (
        <div className="Mountain">
          <h3>{this.props.peakName}</h3>
          <p>This is my favorite mountain!</p>
          <button onClick={this.props.setFavoriteMountain}>Favorite</button>
        </div>
      )
    } else {
      return (
        <div className="Mountain">
          <h3>{this.props.peakName}</h3>
          <button onClick={this.props.setFavoriteMountain}>Favorite</button>
        </div>
      )
    }
  }
}

export default Mountain;