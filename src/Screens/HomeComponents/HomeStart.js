import React, {useState} from 'react';
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
} from '../Elements/HomeElem';
import {FaMapMarked} from 'react-icons/fa';
// import Maps from '../../Components/Map';
// import {
//   MapElements,
//   ButtonWrapper as MapButtonWrapper,
// } from '../../Components/MapElem';
// import {IoIosArrowDown} from 'react-icons/io';
const HomeStart = ({
  isMapVisible,
  toggleMap,
  locations,
  setLocation,
  location,
}) => {
  const [locat, setLocat] = useState(location);
  // const locations = ['Hello', 'Hi', 'how', 'hell', 'hoob'];
  // console.log(location);
  const [suggestions, setSuggestions] = useState([]);
  const [text, setText] = useState(locat[0] != '' ? locat[0] : '');

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
          <li onClick={() => suggestionSelected(loc)}>{loc[0]}</li>
        ))}
      </SuggestionsList>
    );
  };

  return (
    <>
      <DetailsContainer>
        <TextContainer>Start You Ride Now!</TextContainer>
        <TextContainer>With AppName</TextContainer>
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
              size={17}
              onClick={() => {
                setLocation(locat);
                toggleMap();
              }}
            />
          </MapIcon>
        </TextInputContainer>
        {showSuggestions()}
        {/* <TextInputContainer>
          <ButtonText>End</ButtonText>
          <TextInput id="end" placeholder="Destination" />
          <MapIcon>
            <FaMapMarked size={17} onClick={toggleMap} />
          </MapIcon>
        </TextInputContainer> */}
        <ButtonWrapper>
          {text != '' &&
          locations.find(
            (elem) => elem[0].toLowerCase() == text.toLowerCase()
          ) ? (
            <ButtonRoute to={homeRide}>Get Started</ButtonRoute>
          ) : (
            <ButtonRoute to={homeStart}>Get Started</ButtonRoute>
          )}
        </ButtonWrapper>
      </DetailsContainer>
    </>
  );
};
export default HomeStart;
