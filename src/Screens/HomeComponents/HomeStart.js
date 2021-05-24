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
const HomeStart = ({isMapVisible, toggleMap}) => {
  const [isTextActive, setIsTextActive] = useState(false);

  const toggleTextActive = () => {
    setIsTextActive(!isTextActive);
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
            onChange={() => toggleTextActive()}
          />
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
        <ButtonWrapper>
          <ButtonRoute to={homeRide}>Get Started</ButtonRoute>
        </ButtonWrapper>
      </DetailsContainer>
      {/* </>
      )} */}
    </>
  );
};
export default HomeStart;
