import React from 'react';
import {backendEndpoint} from '../../Constants/RouteInfo';

async function getLocations() {
  var locations = [];
  await fetch('http://localhost:5000/home/getRide', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  })
    // .then(function (respo) {
    //   return respo.json();
    // })
    // .then(function (data) {
    //   locaObj = data;
    // });
    // response.json().then((res) => {
    //   locations.push(res);
    // });
    // console.log(locations);
    .then((respose) => respose.json())
    .then((response) => {
      console.log(response.Locations);
      locations = response.Locations;
    })
    .catch((err) => {
      console.log('yo error in locations .js');
      console.log(err);
    });
  return locations;
}

export {getLocations};
