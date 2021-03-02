import React, { useRef } from 'react';

import { withGoogleMap, GoogleMap } from 'react-google-maps';

export default function App() {
  const GoogleMapExample = withGoogleMap((props) => (
    <GoogleMap
      defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
      defaultZoom={13}
    ></GoogleMap>
  ));

  return (
    <div>
      <GoogleMapExample
        containerElement={<div style={{ height: `300px`, width: '450px' }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
