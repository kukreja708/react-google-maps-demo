'use Client';
import React from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import Marker from './Marker';
import PolygonComponent from './PolygonComponent';
import { Circle } from './Circle.tsx';

const LandingPage = () => {
  const position = { lat: 28.7041, lng: 77.1025 };

  const properties = [
    {
      address: 'Sir Ganga Ram Hospital Marg, Rajinder Nagar, Delhi, 110060',
      description: 'Multispeciality Hospital',
      price: '3,889,000',
      type: 'hospital',
      bed: 50,
      bath: 40,
      size: 300,
      position: {
        lat: 28.644,
        lng: 77.1913,
      },
    },
    {
      address: 'Vipin Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
      description: 'Taj Hotel',
      price: '3,050,000',
      type: 'hotel',
      bed: 4,
      bath: 3,
      size: 200,
      position: {
        lat: 26.8516,
        lng: 80.9736,
      },
    },
    {
      address: `Gangori Bazaar, J.D.A. Market, Pink City, Jaipur, Rajasthan 302002`,
      description: 'City Palace Jaipur',
      price: '3,125,000',
      type: 'castle',
      bed: 4,
      bath: 4,
      size: 800,
      position: {
        lat: 26.9258,
        lng: 75.8237,
      },
    },
    {
      address: 'Maidan, B.B.D. Bagh, Kolkata, West Bengal 700021',
      description: 'Eden Gardens',
      price: '3,000,000',
      type: 'building',
      bed: 2,
      bath: 1,
      size: 100,
      position: {
        lat: 22.5646,
        lng: 88.3433,
      },
    },

    {
      address:
        'Chhatrapati Shivaji International Airport, Mumbai, Maharashtra 400099',
      description: 'Airport',
      price: '3,000,000',
      type: 'airport',
      bed: 2,
      bath: 1,
      size: 100,
      position: {
        lat: 19.0902,
        lng: 72.8628,
      },
    },
  ];

  const traingleCoordinates = [
    {
      lat: 28.644,
      lng: 77.1913,
    },
    { lat: 26.8516, lng: 80.9736 },
    {
      lat: 26.9258,
      lng: 75.8237,
    },
    {
      lat: 28.644,
      lng: 77.1913,
    },
  ];
  return (
    <APIProvider apiKey={process.env.REACT_APP_MAPS_API_KEY || ''}>
      <div style={{ height: '100vh', width: '100%' }}>
        <Map
          defaultCenter={position}
          defaultZoom={5}
          mapId={process.env.REACT_APP_NEXT_PUBLIC_MAPS_ID}
        >
          {Object.entries(properties).map(([key, p]) => (
            <Marker position={p.position} property={p} key={key}></Marker>
          ))}
          <Circle
            radius={20000}
            center={position}
            strokeColor={'#0c4cb3'}
            strokeOpacity={1}
            strokeWeight={3}
            fillColor={'#3b82f6'}
            fillOpacity={0.3}
          />
        </Map>
      </div>
    </APIProvider>
  );
};
export default LandingPage;
