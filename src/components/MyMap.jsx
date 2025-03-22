import React, { useEffect, useRef, useState } from 'react';
import Weather from './Weather';

const mapOptions = {
  mapId: process.env.REACT_APP_NEXT_PUBLIC_MAPS_ID,
  center: { lat: 43.66293, lng: -79.39314 },
  zoom: 10,
  disableDefaultUI: true,
};

const MyMap = () => {
  const [map, setMap] = useState();
  const ref = useRef();

  useEffect(() => {
    setMap(new window.google.maps.Map(ref.current, mapOptions));
  }, []);

  return (
    <>
      <div ref={ref} id="map" />
      {map && <Weather map={map} />}
    </>
  );
};

export default MyMap;
