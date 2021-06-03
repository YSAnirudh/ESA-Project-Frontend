import React, {useState} from 'react';
import {
  homeRide,
  homeRiding,
  homeStart,
  payment,
} from '../../Constants/RouteInfo';
import {
  BackButtonWrapper,
  ButtonBack,
  ButtonRoute,
  ButtonText,
  ButtonWrapper,
  DetailsContainer,
  TextContainer,
  TextInput,
  TextInputContainer,
  SuggestionsList,
  SuggestionsItem,
  DropButton,
} from '../Elements/HomeElem';
import {FaAngleDown} from 'react-icons/fa';

const HomeRide = ({toggleHomeStart, toggleHomeRide, location, setIsRiding}) => {
  const [text, setText] = useState('');
  const [OTP, setOTP] = useState(
    '0' /*Math.floor(Math.random() * 900000 + 100000)*/
  );
  // POST the locations info and get back list of vehicles

  var vehicles = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const onTextChange = (e) => {
    const value = e.target.value;
    setText(value);
  };

  const [vhNo, setVhNo] = useState(-1);
  const [openDraw, setOpenDraw] = useState(false);
  const openDrawer = () => {
    setOpenDraw(!openDraw);
  };
  const showVehicles = () => {
    if (openDraw) {
      return (
        <SuggestionsList>
          {vehicles.map((vhNo) => (
            <SuggestionsItem onClick={() => vehicleSelected(vhNo)}>
              {vhNo}
            </SuggestionsItem>
          ))}
        </SuggestionsList>
      );
    }
  };

  const vehicleSelected = (value) => {
    setVhNo(value);
    setOpenDraw(false);
  };

  return (
    <DetailsContainer height={openDraw ? '65vh' : '55vh'}>
      <TextContainer fontSize={10}>Your Ride</TextContainer>
      <TextContainer fontSize={10}>From: {location[0]}</TextContainer>
      <TextContainer fontSize={10}>Cost: Rs.y/1hr</TextContainer>
      <TextContainer fontSize={10}>OTP Sent to : ---</TextContainer>
      <TextInputContainer width="auto">
        <ButtonText width={30}>Vehicle No. {vhNo != -1 ? vhNo : ''}</ButtonText>
        <FaAngleDown
          cursor="pointer"
          size={20}
          onClick={() => {
            openDrawer();
          }}
        />
      </TextInputContainer>
      {openDraw ? showVehicles() : <></>}

      <TextInputContainer padding={0}>
        <ButtonText>OTP</ButtonText>
        <TextInput
          id="start"
          placeholder="Enter OTP"
          type="number"
          step={0.01}
          value={text}
          onChange={(e) => {
            onTextChange(e);
          }}
        />
      </TextInputContainer>
      <ButtonBack
        onClick={() => {
          alert(`OTP: ${OTP}`);
        }}
      >
        {}
        Resend OTP
      </ButtonBack>
      {location[0] == '' ? (
        <ButtonWrapper colorChange="#01bf71">
          <ButtonRoute
            to={homeRide}
            onClick={() => {
              alert('Go Back and Select a Location');
            }}
          >
            Start Ride
          </ButtonRoute>
        </ButtonWrapper>
      ) : OTP == text ? (
        vhNo != -1 ? (
          <ButtonWrapper colorChange="#01bf71">
            <ButtonRoute
              to={homeRiding}
              onClick={() => {
                setIsRiding(true);
              }}
            >
              Start Ride
            </ButtonRoute>
          </ButtonWrapper>
        ) : (
          <ButtonWrapper colorChange="#01bf71">
            <ButtonRoute
              to={homeRide}
              onClick={() => {
                alert('Select Vehicle');
              }}
            >
              Start Ride
            </ButtonRoute>
          </ButtonWrapper>
        )
      ) : (
        <ButtonWrapper colorChange="#01bf71">
          <ButtonRoute
            to={homeRide}
            onClick={() => {
              alert(`Wrong OTP ${OTP}`);
            }}
          >
            Start Ride
          </ButtonRoute>
        </ButtonWrapper>
      )}
      <BackButtonWrapper>
        <ButtonRoute to={homeStart} mobFontSize="14px" fontSize="10px">
          Go Back
        </ButtonRoute>
      </BackButtonWrapper>
    </DetailsContainer>
  );
};

export default HomeRide;
