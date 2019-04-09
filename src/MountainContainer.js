import React from 'react';
import Mountain from './Mountain';

function MountainContainer(props) {
  return (
    <section>
      {
        props.mountains.map(mountain => {
          return <Mountain peakName={mountain.peakName} />
        })
      }
    </section>
  )
}

export default MountainContainer;