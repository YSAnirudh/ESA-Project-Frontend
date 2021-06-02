import React from 'react';

import {LoadScript, GoogleMap} from '@react-google-maps/api';
import {ButtonWrapper, MapElements} from './MapElem';
import {IoIosArrowDown} from 'react-icons/io';
import L, {latLng} from 'leaflet';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import {Button} from './MapElem';
function Maps({isMapVisible, toggleMap, locations, setLocation}) {
  //function handleApiLoaded(map, maps) {}
  const defaultCenter = {lat: 41.3851, lng: 2.1734};
  const defaultCenter1 = {lat: 41.3851, lng: 2};
  const arr = [defaultCenter, defaultCenter1];
  var locs = locations;
  // console.log(locs);
  const pin = (location) => {
    return (
      <Marker
        riseOnHover={true}
        riseOffset={1000}
        title={location[0]}
        position={location[1]}
      >
        <Popup>
          {location[0]}
          <Button
            onClick={() => {
              // console.log(location);
              setLocation(location);
              toggleMap();
            }}
          >
            Select
          </Button>
        </Popup>
      </Marker>
    );
  };

  const pins = (locations) => {
    var arr = [];
    for (var i = 0; i < locations.length; i++) {
      arr.push(pin(locations[i]));
    }
    return arr;
  };

  // delete L.Icon.Default.prototype._getIconUrl;

  // L.Icon.Default.mergeOptions({
  //   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  //   iconUrl: require('leaflet/dist/images/marker-icon.png'),
  //   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  // });

  return (
    <>
      <MapElements>
        <MapContainer
          center={latLng([17.49593900920454, 78.43781262125594])}
          zoom={12}
          scrollWheelZoom={true}
          style={mapStyles}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright”>OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {pins(locs)}
        </MapContainer>
      </MapElements>
      {/* <div id="map"></div> */}
      <ButtonWrapper onClick={() => toggleMap()}>
        <IoIosArrowDown size={25} />
      </ButtonWrapper>
    </>
  );
}

export default Maps;
//bootstrapURLKeys={{key: 'AIzaSyB5-a_N4wZHXxPEFn4g7AzrDmmNIyQeMPM'}}
const mapStyles = {
  height: 'calc(100vh - 60px)',
  width: '100%',
  // position: 'absolute',
};
