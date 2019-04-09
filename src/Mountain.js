import React, {Component} from 'react';

class Mountain extends Component {
  render() {
    if (this.props.myFavoriteMountain === this.props.peakName) {
      return (
        <div>
          <p>{this.props.peakName}</p>
          <p>This is my favorite mountain!</p>
          <button onClick={this.props.setFavoriteMountain}>Favorite</button>
        </div>
      )
    } else {
      return (
        <div>
          <p>{this.props.peakName}</p>
          <button onClick={this.props.setFavoriteMountain}>Favorite</button>
        </div>
      )
    }
  }
}

export default Mountain;