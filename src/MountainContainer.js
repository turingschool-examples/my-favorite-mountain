import React from 'react';
import Mountain from './Mountain';

function MountainContainer(props) {
  return (
    <div>
      {
        props.mountains.map(mountain => {
          return (
            <Mountain
              myFavoriteMountain={props.myFavoriteMountain}
              peakName={mountain.peakName}
              setFavoriteMountain={props.setFavoriteMountain}
            />
          )
        })
      }
    </div>
  )
}

export default MountainContainer;