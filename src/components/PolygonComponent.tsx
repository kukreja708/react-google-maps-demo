/* eslint-disable complexity */
import {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';

import type { Ref } from 'react';
import { GoogleMapsContext, latLngEquals } from '@vis.gl/react-google-maps';

export type PolygonProps = google.maps.PolygonOptions;

export type PolygonRef = Ref<google.maps.Polygon | null>;

function usePolygon(props: PolygonProps) {
  const { paths, ...polygonOptions } = props;
  // This is here to avoid triggering the useEffect below when the callbacks change (which happen if the user didn't memoize them)

  const polygon = useRef(new google.maps.Polygon()).current;
  // update circleOptions (note the dependencies aren't properly checked
  // here, we just assume that setOptions is smart enough to not waste a
  // lot of time updating values that didn't change)
  polygon.setOptions(polygonOptions);

  useEffect(() => {
    if (!paths) return;
    else polygon.setPaths(paths);
  }, [paths]);

  // useEffect(() => {
  //   if (radius === undefined || radius === null) return;
  //   if (radius !== circle.getRadius()) circle.setRadius(radius);
  // }, [radius]);

  const map = useContext(GoogleMapsContext)?.map;

  // create circle instance and add to the map once the map is available
  useEffect(() => {
    if (!map) {
      if (map === undefined)
        console.error('<Polygon> has to be inside a Map component.');

      return;
    }

    polygon.setMap(map);

    return () => {
      polygon.setMap(null);
    };
  }, [map]);

  return polygon;
}

/**
 * Component to render a Google Maps Polygon on a map
 */
export const PolygonComponent = forwardRef(
  (props: PolygonProps, ref: PolygonRef) => {
    const polygon = usePolygon(props);

    useImperativeHandle(ref, () => polygon);

    return null;
  }
);
