import React, {useEffect, useState} from 'react';
import {homeRide, homeRiding, homeStart} from '../../Constants/RouteInfo';
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
} from '../Elements/HomeElem';
import {FaAngleDown} from 'react-icons/fa';

const HomeRide = ({
  location,
  setIsRiding,
  vehicles,
  phoneNo,
  costStr,
  setVehNo,
  userId,
}) => {
  const [text, setText] = useState('');
  const [OTP, setOTP] = useState(OTP);
  const changeOTP = () => {};

  // POST the locations info and get back list of vehicles

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
      return vehicles.length !== 0 ? (
        <SuggestionsList>
          {vehicles.sort().map((vhNo) => (
            <SuggestionsItem onClick={() => vehicleSelected(vhNo)}>
              {vhNo}
            </SuggestionsItem>
          ))}
        </SuggestionsList>
      ) : (
        <SuggestionsList>
          <SuggestionsItem>No Vehicles at {location[0]}</SuggestionsItem>
        </SuggestionsList>
      );
    }
  };

  useEffect(() => {
    if (typeof OTP === 'undefined') {
    } else {
      alert(`OTP: ${OTP}`);
    }
  }, [OTP]);

  const vehicleSelected = (value) => {
    setVhNo(value);
    setOpenDraw(false);
  };

  const giveAlert = async () => {
    setOTP(Math.floor(Math.random() * 900000 + 100000).toString());
  };

  // const [costStr, setCostStr] = useState('');
  const handlePostLocationAndVhNO = (locat) => {
    fetch('http://jeldi.herokuapp.com/home/startRide', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        userId: userId,
        vehicleId: vhNo,
        startLocation: locat[0],
      }),
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };

  return (
    <DetailsContainer height={openDraw ? '65vh' : '55vh'}>
      <TextContainer fontSize={10}>Your Ride</TextContainer>
      <TextContainer fontSize={10}>From: {location[0]}</TextContainer>
      <TextContainer fontSize={10}>Cost: {costStr}</TextContainer>
      {location[0] !== '' ? (
        <TextContainer fontSize={10}>OTP Sent to : {phoneNo}</TextContainer>
      ) : (
        <TextContainer fontSize={10}>
          Go Back and Select a Location
        </TextContainer>
      )}
      <TextInputContainer width="auto">
        <ButtonText width={30}>
          Vehicle No. {vhNo !== -1 ? vhNo : ''}
        </ButtonText>
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
          value={text}
          onChange={(e) => {
            onTextChange(e);
          }}
        />
      </TextInputContainer>
      <ButtonBack
        onClick={() => {
          giveAlert();
        }}
      >
        {}
        Resend OTP
      </ButtonBack>
      {location[0] === '' ? (
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
      ) : OTP === text ? (
        vhNo !== -1 ? (
          <ButtonWrapper colorChange="#01bf71">
            <ButtonRoute
              to={homeRiding}
              onClick={() => {
                setIsRiding(true);
                localStorage.setItem('riding', true);
                setVehNo(vhNo);
                handlePostLocationAndVhNO(location);
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
              alert(`Wrong OTP`);
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
