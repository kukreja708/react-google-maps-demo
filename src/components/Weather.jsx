import React, { useState } from 'react';
import Marker from './Marker';
import { AdvancedMarker } from '@vis.gl/react-google-maps';

const weatherData = {
  A: {
    name: 'Toronto',
    position: { lat: 43.66293, lng: -79.39314 },
    climate: 'Raining',
    temp: 20,
    fiveDay: [15, 18, 12, 22, 20],
  },
  B: {
    name: 'Guelph',
    position: { lat: 43.544811, lng: -80.248108 },
    climate: 'Cloudy',
    temp: 20,
    fiveDay: [15, 18, 12, 22, 20],
  },
  C: {
    name: 'Orangeville',
    position: { lat: 43.919239, lng: -80.097412 },
    climate: 'Sunny',
    temp: 20,
    fiveDay: [15, 18, 12, 22, 20],
  },
};

const Weather = ({ map }) => {
  const [data, setData] = useState(weatherData);
  const [highlight, setHighlight] = useState();
  // const [editing, setEditing] = useState();

  return (
    <>
      {Object.entries(data).map(([key, weather]) => (
        <AdvancedMarker key={key}>
          <div
            className={`marker ${weather.climate.toLowerCase()} ${
              highlight === key ? 'highlight' : ''
            }`}
            onMouseEnter={() => setHighlight(key)}
            onMouseLeave={() => setHighlight(null)}
          >
            <h2>{weather.climate}</h2>
            <div>{weather.temp}c</div>
            {highlight === key ? (
              <div className="five-day">
                <p>Next 5</p>
                <p>{weather.fiveDay.join(', ')}</p>
              </div>
            ) : null}
          </div>
        </AdvancedMarker>
        // <Marker key={key} map={map} position={weather.position}>

        // </Marker>
      ))}
    </>
  );
};

export default Weather;
