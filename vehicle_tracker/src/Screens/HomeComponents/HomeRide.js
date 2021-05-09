import React, {useState} from 'react';
import {homeRide, homeStart, payment} from '../../Constants/RouteInfo';
import {
  BackButtonWrapper,
  ButtonRoute,
  ButtonWrapper,
  DetailsContainer,
  TextContainer,
} from '../Elements/HomeElem';

const HomeRide = () => {
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
            <ButtonRoute
              to={homeRide}
              onClick={() => {
                toggleRiding();
              }}
            >
              Start Ride
            </ButtonRoute>
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

  return (
    <DetailsContainer>
      <TextContainer>Your Ride</TextContainer>
      <TextContainer>From:</TextContainer>
      <TextContainer>To:</TextContainer>
      <TextContainer>Estimated Duration:x min</TextContainer>
      <TextContainer>Estimated Cost:Rs.y</TextContainer>
      <Buttons />
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
