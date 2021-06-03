import React, {useEffect, useRef, useState} from 'react';

import {LoadScript, GoogleMap} from '@react-google-maps/api';
import {ButtonWrapper, MapElements} from './MapElem';
import {IoIosArrowDown} from 'react-icons/io';
import L, {latLng} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import {Button} from './MapElem';
function Maps({isMapVisible, toggleMap, locations, setLocation, userLoc}) {
  //function handleApiLoaded(map, maps) {}
  var locs = locations;

  // console.log(locs);
  const pin = (location) => {
    return (
      <>
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
      </>
    );
  };

  const pins = (locations) => {
    var arr = [];
    for (var i = 0; i < locations.length; i++) {
      arr.push(pin(locations[i]));
    }
    return arr;
  };
  var greenIcon = new L.Icon({
    iconUrl:
      'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
    shadowUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

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
          <Marker
            title={'Your Location'}
            position={latLng(userLoc ? [userLoc[0], userLoc[1]] : [0, 0])}
            icon={greenIcon}
          >
            <Popup>{'Your Location.'}</Popup>
          </Marker>
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
