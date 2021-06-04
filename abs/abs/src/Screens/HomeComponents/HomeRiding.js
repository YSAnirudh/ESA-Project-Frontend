import React from 'react';
import {homeRide, homeStart} from '../../Constants/RouteInfo';
import {
  BackButtonWrapper,
  ButtonRoute,
  ButtonWrapper,
  DetailsContainer,
  TextContainer,
} from '../Elements/HomeElem';

const HomeRiding = () => {
  const stopRideOnlyIfNear = () => {
    if (true) {
      return (
        <ButtonWrapper colorChange="red">
          <ButtonRoute to={homeRide}>Stop Ride</ButtonRoute>
        </ButtonWrapper>
      );
    } else {
      return (
        <div style={{marginLeft: 10, alignContent: 'center'}}>
          <TextContainer>
            Make sure you checkout with your vehicle at the nearest location.
            Then you can Stop Ride
          </TextContainer>
        </div>
      );
    }
  };
  return (
    <>
      <DetailsContainer>
        {stopRideOnlyIfNear()}
        {/* <BackButtonWrapper>
          <ButtonRoute to={homeStart} mobFontSize="14px" fontSize="10px">
            Go Back
          </ButtonRoute>
        </BackButtonWrapper> */}
      </DetailsContainer>
    </>
  );
};

export default HomeRiding;
