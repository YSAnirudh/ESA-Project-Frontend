import React from 'react';

import {LoadScript, GoogleMap} from '@react-google-maps/api';
import {ButtonWrapper, MapElements} from './MapElem';
import {IoIosArrowDown} from 'react-icons/io';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
function Maps({isMapVisible, toggleMap}) {
  //function handleApiLoaded(map, maps) {}
  const defaultCenter = {lat: 41.3851, lng: 2.1734};
  const defaultCenter1 = {lat: 41.3851, lng: 2};
  const arr = [defaultCenter, defaultCenter1];

  const pins = (locations) => {
    var arr = new Array();
    for (var i = 0; i < locations.length; i++) {
      console.log(locations[i]);
      arr.push(<Marker position={locations[i]}></Marker>);
    }
    return arr;
  };

  return (
    <>
      <MapElements>
        <MapContainer
          center={defaultCenter}
          zoom={13}
          scrollWheelZoom={true}
          style={mapStyles}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright”>OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {arr.map((def) => (
            <Marker position={def}>
              <text>Hellp</text>
            </Marker>
          ))}
        </MapContainer>
      </MapElements>
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
