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
import Map from '../../Components/Map';

const HomeStart = () => {
  const [isMapVisible, setIsMapVisible] = useState(false);
  const toggleMap = () => {
    setIsMapVisible(!isMapVisible);
  };
  return (
    <>
      {isMapVisible ? <Map /> : <></>}
      <DetailsContainer>
        <TextContainer>Start You Ride Now!</TextContainer>
        <TextContainer>With AppName</TextContainer>
        <TextInputContainer>
          <ButtonText>Start</ButtonText>
          <TextInput id="start" placeholder="Start Point" />
          <MapIcon>
            <FaMapMarked size={17} onClick={toggleMap} />
          </MapIcon>
        </TextInputContainer>
        <TextInputContainer>
          <ButtonText>End</ButtonText>
          <TextInput id="end" placeholder="Destination" />
          <MapIcon>
            <FaMapMarked size={17} onClick={toggleMap} />
          </MapIcon>
        </TextInputContainer>
        <ButtonWrapper>
          <ButtonRoute to={homeRide}>Get Started</ButtonRoute>
        </ButtonWrapper>
      </DetailsContainer>
    </>
  );
};
export default HomeStart;
