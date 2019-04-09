import React, {Component} from 'react';

class Mountain extends Component {
  render() {
    return (
      <div>
        <p>{this.props.peakName}</p>
        <button>Favorite</button>
      </div>
    )
  }
}

export default Mountain;