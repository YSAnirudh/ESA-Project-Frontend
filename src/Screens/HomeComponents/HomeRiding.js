import React, {useState} from 'react';
import {
  homeRide,
  homeRiding,
  homeStart,
  payment,
} from '../../Constants/RouteInfo';
import {
  BackButtonWrapper,
  Button,
  ButtonRoute,
  ButtonWrapper,
  DetailsContainer,
  TextContainer,
} from '../Elements/HomeElem';
import Timer from './Timer';

const HomeRiding = ({location, setIsRiding}) => {
  const [isActive, setIsActive] = useState(true);
  const [isStopped, setIsStopped] = useState(false);
  // Send user id and time to backend and it will start counting,
  // when stop ride, get time, endLocation, price and prompt for payment.
  //
  // get amont from backend
  const amount = 0.0;

  const stopRideOnlyIfNear = () => {};
  return (
    <>
      <DetailsContainer>
        {!isStopped ? (
          <>
            <TextContainer>Riding from: {location[0]}</TextContainer>
            <Timer isActive={isActive} setIsActive={setIsActive} />
            <Button
              onClick={() => {
                setIsActive(false);
                setIsStopped(true);
              }}
            >
              Stop Ride
            </Button>
          </>
        ) : (
          <>
            <TextContainer>From: {location[0]}</TextContainer>
            <TextContainer>To: "End Loc (From backend)"</TextContainer>
            <ButtonWrapper colorChange="#01bf71">
              <ButtonRoute
                to={payment}
                onClick={() => {
                  setIsActive(true);
                  setIsRiding(false);
                  setIsStopped(false);
                }}
              >
                Pay Rs.{amount}
              </ButtonRoute>
            </ButtonWrapper>
          </>
        )}
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
