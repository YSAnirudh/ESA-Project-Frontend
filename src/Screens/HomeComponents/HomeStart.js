import React, {useState} from 'react';
import {homeRide} from '../../Constants/RouteInfo';
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
const HomeStart = ({isMapVisible, toggleMap}) => {
  const [isTextActive, setIsTextActive] = useState(false);

  const toggleTextActive = () => {
    setIsTextActive(!isTextActive);
  };
  const locations = ['Hello', 'Hi', 'how', 'hell', 'hoob'];

  const [suggestions, setSuggestions] = useState([]);
  const [text, setText] = useState('');
  const onTextChange = (e) => {
    let suggestions = [];
    const value = e.target.value;
    if (value.length > 0) {
      const regex = new RegExp(`${value.toLowerCase()}`);
      suggestions = locations.sort().filter((v) => regex.test(v.toLowerCase()));
    } else if (value.length === 0) {
      //suggestions = locations;
    }
    setSuggestions(suggestions);
    setText(value);
  };

  const suggestionSelected = (value) => {
    setText(value);
    setSuggestions([]);
  };

  const showLocations = (e) => {
    const value = e.target.value;
    if (value.length === 0) {
      <SuggestionsList>
        {locations.map((loc) => (
          <li>{loc}</li>
        ))}
      </SuggestionsList>;
    }
  };
  const showSuggestions = () => {
    if (suggestions.length === 0) {
      return <></>;
    }
    return (
      <SuggestionsList>
        {suggestions.map((loc) => (
          <li onClick={() => suggestionSelected(loc)}>{loc}</li>
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
            <FaMapMarked size={17} onClick={() => toggleMap()} />
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
          <ButtonRoute to={homeRide}>Get Started</ButtonRoute>
        </ButtonWrapper>
      </DetailsContainer>
    </>
  );
};
export default HomeStart;
