import React, {useState} from 'react';
import {homeRide, homeRiding, homeStart} from '../../Constants/RouteInfo';
import {
  BackButtonWrapper,
  ButtonRoute,
  ButtonWrapper,
  DetailsContainer,
  TextContainer,
} from '../Elements/HomeElem';
import Timer from './Timer';

const HomeRiding = ({location}) => {
  const [isActive, setIsActive] = useState(true);

  const stopRideOnlyIfNear = () => {
    if (true) {
      return (
        <>
          <TextContainer>Riding from: {location[0]}</TextContainer>
          <Timer isActive={isActive} setIsActive={setIsActive} />
          <ButtonWrapper colorChange="red">
            <ButtonRoute
              to={homeRiding}
              onClick={() => {
                setIsActive(!isActive);
              }}
            >
              Stop Ride
            </ButtonRoute>
          </ButtonWrapper>
        </>
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
