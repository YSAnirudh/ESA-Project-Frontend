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
} from '../Elements/HomeElem';

const HomeRide = ({toggleHomeStart, toggleHomeRide, location}) => {
  const [isRiding, setIsRiding] = useState(false);
  const toggleRiding = () => {
    setIsRiding(!isRiding);
  };

  const Buttons = () => {
    if (isRiding) {
      <>
        <ButtonWrapper colorChange="red">
          <ButtonRoute
            to={homeRide}
            onClick={() => {
              toggleRiding();
            }}
          >
            Stop Ride
          </ButtonRoute>
        </ButtonWrapper>
        <BackButtonWrapper>
          <ButtonRoute to={homeStart} mobFontSize="14px" fontSize="10px">
            Go Back
          </ButtonRoute>
        </BackButtonWrapper>
      </>;
    } else {
      return (
        <>
          <ButtonWrapper colorChange="green">
            <ButtonRoute to={homeRiding}>Start Ride</ButtonRoute>
          </ButtonWrapper>
          <BackButtonWrapper>
            <ButtonRoute to={homeStart} mobFontSize="14px" fontSize="10px">
              Go Back
            </ButtonRoute>
          </BackButtonWrapper>
        </>
      );
    }
  };

  const [text, setText] = useState('');

  const onTextChange = (e) => {
    const value = e.target.value;
    setText(value);
  };
  var OTP = '837492';
  return (
    <DetailsContainer>
      <TextContainer>Your Ride</TextContainer>
      <TextContainer>From: {location[0]}</TextContainer>
      <TextContainer>Cost: Rs.y/1hr</TextContainer>
      <TextContainer fontSize={10}>OTP Sent to : ---</TextContainer>
      <TextInputContainer>
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
        Resend OTP
      </ButtonBack>
      {OTP == text ? (
        <ButtonWrapper colorChange="green">
          <ButtonRoute to={homeRiding}>Start Ride</ButtonRoute>
        </ButtonWrapper>
      ) : (
        <ButtonWrapper colorChange="green">
          <ButtonRoute
            to={homeRide}
            onClick={() => {
              alert('Wrong OTP');
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
      {/* <ButtonWrapper>
        <ButtonRoute
          to={payment}
          onClick={() => {
            alert('payment');
          }}
        >
          Start Ride
        </ButtonRoute>
      </ButtonWrapper>
      <BackButtonWrapper>
        <ButtonRoute to={homeStart} mobFontSize="14px" fontSize="10px">
          Go Back
        </ButtonRoute>
      </BackButtonWrapper> */}
    </DetailsContainer>
  );
};

export default HomeRide;
