import React from 'react';
import {backendEndpoint} from '../../Constants/RouteInfo';

async function getLocations() {
  let locaObj = {};
  await fetch('http://localhost:5000/home/getRide', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  })
    .then(function (respo) {
      return respo.json();
    })
    .then(function (data) {
      locaObj = data;
    });
  // response.json().then((res) => {
  //   locations.push(res);
  // });
  // console.log(locations);
  return locaObj;
}

export {getLocations};
