import React from 'react';

import {LoadScript, GoogleMap} from '@react-google-maps/api';

function Map({center = {}, zoom}) {
  //function handleApiLoaded(map, maps) {}
  const defaultCenter = {
    lat: 41.3851,
    lng: 2.1734,
  };
  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyAs-l4bq1myONVH8cMD-yrY-m4AFdLdiSI">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
      </LoadScript>
    </>
  );
}

export default Map;
//bootstrapURLKeys={{key: 'AIzaSyB5-a_N4wZHXxPEFn4g7AzrDmmNIyQeMPM'}}
const mapStyles = {
  height: 'calc(100vh - 60px)',
  width: '100%',
};
