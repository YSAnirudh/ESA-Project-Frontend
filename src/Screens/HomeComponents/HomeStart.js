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
  toggleHomeStart,
  toggleHomeRide,
}) => {
  const [isTextActive, setIsTextActive] = useState(false);

  const toggleTextActive = () => {
    setIsTextActive(!isTextActive);
  };
  const locations = ['Hello', 'Hi'];

  const [suggestions, setSuggestions] = useState([]);

  const onTextChange = (e) => {
    let suggestions = [];
    const value = e.target.value;
    if (value.length > 0) {
      const regex = new RegExp(`${value}`);
      suggestions = locations.sort().filter((v) => regex.test(v));
    }
    setSuggestions(suggestions);
  };

  const showSuggestions = () => {
    if (suggestions.length === 0) {
      return <></>;
    }
    return (
      <ul>
        {suggestions.map((loc) => (
          <li>{loc}</li>
        ))}
      </ul>
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
            onChange={(e) => onTextChange(e)}
          />
          {showSuggestions()}
          <MapIcon>
            <FaMapMarked size={17} onClick={() => toggleMap()} />
          </MapIcon>
        </TextInputContainer>
        {/* <TextInputContainer>
          <ButtonText>End</ButtonText>
          <TextInput id="end" placeholder="Destination" />
          <MapIcon>
            <FaMapMarked size={17} onClick={toggleMap} />
          </MapIcon>
        </TextInputContainer> */}
        <ButtonWrapper onClick={() => toggleHomeStart()}>
          <ButtonRoute to={homeRide}>Get Started</ButtonRoute>
        </ButtonWrapper>
      </DetailsContainer>
      {/* </>
      )} */}
    </>
  );
};
export default HomeStart;
