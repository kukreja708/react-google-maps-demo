'use Client';
import React from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import Marker from './Marker.tsx';
import { PolygonComponent } from './PolygonComponent.tsx';

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

  const northRegion = [
    { lat: 34.5262, lng: 74.2546, region: 'Kupwara' },
    { lat: 34.4269, lng: 75.7459, region: 'Dras' },
    { lat: 34.5539, lng: 76.1349, region: 'Kargil' },
    { lat: 34.8475, lng: 76.8274, region: 'Turtuk' },
    { lat: 34.8983, lng: 77.4802, region: 'Sasoma' },
    { lat: 34.299, lng: 78.9483, region: 'Gogra' },
    { lat: 33.6029, lng: 78.6561, region: 'Chushul' },
    { lat: 32.0993, lng: 78.3856, region: 'Tabo' },
    { lat: 30.9947, lng: 78.9398, region: 'Gangotri' },
    { lat: 29.8473, lng: 80.5369, region: 'Dharchula' },
    { lat: 28.367, lng: 79.4304, region: 'Barielly' },
    { lat: 28.7041, lng: 77.1025, region: 'Delhi' },
    { lat: 29.1492, lng: 75.7217, region: 'Hisar' },
    { lat: 29.9094, lng: 73.88, region: 'Sri Ganganagar' },
    { lat: 31.634, lng: 74.8723, region: 'Amritsar' },
    { lat: 32.2733, lng: 75.6522, region: 'Pathankot' },
    { lat: 32.7266, lng: 74.857, region: 'Jammu' },
  ];

  const westRegion = [
    { lat: 29.9094, lng: 73.88, region: 'Sri Ganganagar' },
    { lat: 29.5822, lng: 74.3292, region: 'Hanumangarh' },
    { lat: 28.1317, lng: 75.4022, region: 'Jhunjhunu' },
    { lat: 26.9124, lng: 75.7873, region: 'Jaipur' },
    { lat: 26.1659, lng: 75.7963, region: 'Tonk' },
    { lat: 25.4326, lng: 75.6483, region: 'Bundi' },
    { lat: 24.0734, lng: 75.0679, region: 'Mandsaur' },
    { lat: 22.8345, lng: 74.2606, region: 'Dahod' },
    { lat: 21.1702, lng: 72.8311, region: 'Surat' },
    { lat: 22.3072, lng: 73.1812, region: 'Vadodara' },
    { lat: 23.0225, lng: 72.5714, region: 'Ahemdabad' },
    { lat: 21.7645, lng: 72.1519, region: 'Bhavnagar' },
    { lat: 20.71, lng: 70.98, region: 'Diu' },
    { lat: 22.2442, lng: 68.9685, region: 'Dwarka' },
    { lat: 23.242, lng: 69.6669, region: 'Bhuj' },
    { lat: 24.3967, lng: 71.6272, region: 'Tharad' },
    { lat: 27.5231, lng: 70.1558, region: 'Longewala' },
    { lat: 27.9126, lng: 72.189, region: 'Charanwala' },
  ];

  const southRegion = [
    { lat: 14.8848, lng: 74.1181, region: 'Majali' },
    { lat: 14.5479, lng: 74.3188, region: 'Gokarna' },
    { lat: 13.3409, lng: 74.7421, region: 'Udupi' },
    { lat: 12.9141, lng: 74.856, region: 'Mangaluru' },
    { lat: 11.8745, lng: 75.3704, region: 'Kannur' },
    { lat: 11.2588, lng: 75.7804, region: 'Khozikode' },
    { lat: 9.9312, lng: 76.2673, region: 'Kochi' },
    { lat: 9.4981, lng: 76.3388, region: 'Alappuzha' },
    { lat: 8.8932, lng: 76.6141, region: 'Kollam' },
    { lat: 8.5841, lng: 76.9366, region: 'Thiruvananthapuram' },
    { lat: 8.0844, lng: 77.5495, region: 'Kanniyakumari' },
    { lat: 8.7642, lng: 78.1348, region: 'Thoothukudi' },
    { lat: 9.2881, lng: 79.3174, region: 'Rameshwaram' },
    { lat: 11.9416, lng: 79.8083, region: 'Puducherry' },
    { lat: 13.0843, lng: 80.2705, region: 'Chennai' },
    { lat: 14.4426, lng: 79.9865, region: 'Nellore' },
    { lat: 15.5057, lng: 80.0499, region: 'Ongole' },
    { lat: 17.6868, lng: 83.2185, region: 'Vishakhapatnam' },
    { lat: 17.4065, lng: 78.4772, region: 'Hyderabad' },
    { lat: 16.8302, lng: 75.71, region: 'Vijayapura' },
  ];

  const eastRegion = [
    { lat: 27.3314, lng: 88.6138, region: 'Gangtok' },
    { lat: 27.0416, lng: 88.2664, region: 'Darjeeling' },
    { lat: 26.7271, lng: 88.3953, region: 'Siliguri' },
    { lat: 26.3452, lng: 89.4482, region: 'Cooch Behar' },
    { lat: 26.0207, lng: 89.9743, region: 'Dhubri' },
    { lat: 25.5143, lng: 90.2041, region: 'Tura' },
    { lat: 25.2702, lng: 91.7323, region: 'Cherrapunji' },
    { lat: 24.8333, lng: 92.7789, region: 'Silchar' },
    { lat: 23.8315, lng: 91.2868, region: 'Agartala' },
    { lat: 23.0098, lng: 91.7198, region: 'Sabroom' },
    { lat: 23.7571, lng: 91.9441, region: 'Chakmapara' },
    { lat: 23.7307, lng: 92.7173, region: 'Aizwal' },
    { lat: 22.5321, lng: 92.8991, region: 'Lawngtlai' },
    { lat: 24.8108, lng: 93.9386, region: 'Imphal' },
    { lat: 27.4886, lng: 95.3558, region: 'Tinsukia' },
    { lat: 28.7972, lng: 95.9048, region: 'Anini' },
    { lat: 27.5861, lng: 91.8594, region: 'Tawang' },
    { lat: 26.6528, lng: 92.7926, region: 'Tezpur' },
    { lat: 26.503, lng: 90.5536, region: 'Bongaigaon' },
  ];

  const regions = {
    north: northRegion,
    west: westRegion,
    south: southRegion,
    east: eastRegion,
  };

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
          {Object.entries(regions).map(([key, region]) => (
            <PolygonComponent
              key={key}
              paths={region}
              strokeColor="#FF0000"
              strokeOpacity={0.8}
              strokeWeight={2}
              fillColor="#FF0000"
              fillOpacity={0.35}
            ></PolygonComponent>
          ))}
        </Map>
      </div>
    </APIProvider>
  );
};
export default LandingPage;
