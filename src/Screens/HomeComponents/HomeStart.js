import React, {useState, useEffect} from 'react';
import {homeRide, homeStart} from '../../Constants/RouteInfo';
import {
  ButtonRoute,
  ButtonText,
  ButtonWrapper,
  DetailsContainer,
  TextContainer,
  TextInput,
  TextInputContainer,
  MapIcon,
  SuggestionsList,
  SuggestionsItem,
} from '../Elements/HomeElem';
import {FaMapMarked} from 'react-icons/fa';
const geolib = require('geolib');
// import Maps from '../../Components/Map';
// import {
//   MapElements,
//   ButtonWrapper as MapButtonWrapper,
// } from '../../Components/MapElem';
// import {IoIosArrowDown} from 'react-icons/io';
const HomeStart = ({
  toggleMap,
  locations,
  setLocation,
  location,
  userLoc,
  getVehicles,
}) => {
  useEffect(() => {
    calcNearestLocation(userLoc, locations);
  }, []);

  const [locat, setLocat] = useState(location);
  const [suggestions, setSuggestions] = useState([]);
  const [text, setText] = useState(locat[0] !== '' ? locat[0] : '');
  const [nearestLocation, setNearestLocation] = useState('');
  const calcNearestLocation = (loca, locats) => {
    var min = 100000000000.0;
    var loc = '';
    for (var i = 0; i < locats.length; i++) {
      var dist = geolib.getDistance(
        {latitude: locats[i][1][0], longitude: locats[i][1][1]},
        {latitude: loca[0], longitude: loca[1]}
      );
      if (dist < min) {
        loc = locats[i][0];
        min = dist;
      } else {
        min = min;
      }
    }
    setNearestLocation(loc);
  };

  const onTextChange = (e) => {
    let suggestions = [];
    const value = e.target.value;
    if (value.length > 0) {
      const regex = new RegExp(`${value.toLowerCase()}`);
      suggestions = locations
        .sort()
        .filter((v) => regex.test(v[0].toLowerCase()));
    } else if (value.length === 0) {
      //suggestions = locations;
    }

    setSuggestions(suggestions);
    setText(value);
  };

  const suggestionSelected = (value) => {
    setLocat(value);
    setText(value[0]);
    setSuggestions([]);
  };

  const showSuggestions = () => {
    if (suggestions.length === 0) {
      return <></>;
    }
    return (
      <SuggestionsList>
        {suggestions.map((loc) => (
          <SuggestionsItem onClick={() => suggestionSelected(loc)}>
            {loc[0]}
          </SuggestionsItem>
        ))}
      </SuggestionsList>
    );
  };

  return (
    <>
      <DetailsContainer height={suggestions.length !== 0 ? '60vh' : '50vh'}>
        <TextContainer>Start Your Ride Now!</TextContainer>
        <TextContainer>Jeldi se Jeldi</TextContainer>
        <TextContainer fontSize="12px">
          Nearest Bike Location: {nearestLocation}
        </TextContainer>
        <TextInputContainer>
          <ButtonText>Start</ButtonText>
          <TextInput
            id="start"
            placeholder="Start Point"
            value={text}
            onChange={(e) => {
              onTextChange(e);
            }}
          />

          <MapIcon>
            <FaMapMarked
              cursor="pointer"
              size={17}
              onClick={() => {
                setLocation(locat);
                localStorage.setItem('location', locat);
                toggleMap();
              }}
            />
          </MapIcon>
        </TextInputContainer>
        {showSuggestions()}
        <ButtonWrapper>
          {text !== '' &&
          locations.find(
            (elem) => elem[0].toLowerCase() === text.toLowerCase()
          ) ? (
            <ButtonRoute
              to={homeRide}
              onClick={() => {
                setLocation(locat);
                localStorage.setItem('location', locat);
                getVehicles(locat);
              }}
            >
              Get Started
            </ButtonRoute>
          ) : (
            <ButtonRoute
              to={homeStart}
              onClick={() => alert('Select Location')}
            >
              Get Started
            </ButtonRoute>
          )}
        </ButtonWrapper>
      </DetailsContainer>
    </>
  );
};
export default HomeStart;
