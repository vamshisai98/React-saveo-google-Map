import React, { useState, useContext, useEffect } from 'react';
import ReactMapGL, {
  GeolocateControl,
  Marker,
  Source,
  Layer,
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { DetailsContext } from '../App';

export default function App() {
  let [viewport, setViewport] = useState({
    latitude: 20.5937,
    longitude: 78.9629,
    zoom: 3,
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const { pins, show } = useContext(DetailsContext);

  const [routing, setRouting] = useState([]);

  const data = {
    type: 'Feature',
    geometry: {
      type: 'LineString',
      coordinates: routing,
    },
  };

  useEffect(() => {
    let newRoute = [];
    pins.forEach((p) => {
      newRoute.push([p.Long, p.Lat]);
    });
    setRouting(newRoute);
  }, [pins, show]);

  return (
    <ReactMapGL
      mapboxApiAccessToken={
        'pk.eyJ1IjoidmFtc2hpc2FpIiwiYSI6ImNrbHJrYmRzaTBxMWsybmxsdmg1YnZiOHcifQ.ifB3D6dfE6828-xRyyvJLA'
      }
      {...viewport}
      width='100%'
      height='100%'
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {pins.map((pin, index) => {
        return (
          <Marker
            key={index}
            latitude={parseInt(pin.Lat)}
            longitude={parseInt(pin.Long)}
            offsetTop={-20}
          >
            <img
              src='https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png'
              style={{ width: '20px', height: '20px', color: 'black' }}
            />
          </Marker>
        );
      })}
      {show && <Source id='route' type='geojson' data={data} />}

      <Layer
        id='route'
        type='line'
        source='route'
        layout={{
          'line-join': 'round',
          'line-cap': 'round',
        }}
        paint={{
          'line-color': '#000000',
          'line-width': 4,
        }}
      />
    </ReactMapGL>
  );
}
