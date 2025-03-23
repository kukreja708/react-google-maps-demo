import React, { useState } from 'react';
import { AdvancedMarker } from '@vis.gl/react-google-maps';
import HomeIcon from '@mui/icons-material/Home';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import BedIcon from '@mui/icons-material/Bed';
import ShowerIcon from '@mui/icons-material/Shower';
import StraightenIcon from '@mui/icons-material/Straighten';
import CastleIcon from '@mui/icons-material/Castle';
import HotelIcon from '@mui/icons-material/Hotel';
import BusinessIcon from '@mui/icons-material/Business';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';

const Marker = ({ position, property }) => {
  const [showDetails, setShowDetails] = useState(false);

  const getIcon = () => {
    switch (property.type) {
      case 'home':
        return <HomeIcon className="home" />;
      case 'hospital':
        return <LocalHospitalIcon className="hospital" />;
      case 'warehouse':
        return <WarehouseIcon className="warehouse" />;
      case 'castle':
        return <CastleIcon className="castle" />;
      case 'hotel':
        return <HotelIcon className="hotel" />;
      case 'building':
        return <BusinessIcon className="building" />;
      case 'airport':
        return <LocalAirportIcon className="airport" />;
      default:
        return <HomeIcon />;
    }
  };

  const toggleHighlight = () => setShowDetails(!showDetails);

  return (
    <>
      <AdvancedMarker
        position={position}
        className={showDetails ? 'property highlight' : 'property'}
        onClick={toggleHighlight}
      >
        <div className="icon">{getIcon()}</div>

        {showDetails && (
          <div className="details">
            <div className="price">Rs. {property.price}</div>
            <div className="address">{property.address}</div>
            <div className="features">
              <div>
                <BedIcon className="bed" />
                <span>{property.bed}</span>
              </div>
              <div>
                <ShowerIcon className="bath" />
                <span>{property.bath}</span>
              </div>
              <div>
                <StraightenIcon className="size" />
                <span>
                  {property.size} ft<sup>2</sup>
                </span>
              </div>
            </div>
          </div>
        )}
      </AdvancedMarker>
    </>
  );
};

export default Marker;
