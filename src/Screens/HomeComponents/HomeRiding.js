import React, {useState} from 'react';
import {useHistory} from 'react-router';
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

const HomeRiding = ({location, setIsRiding, userId, vhNo}) => {
  const [isActive, setIsActive] = useState(true);
  const [isStopped, setIsStopped] = useState(false);
  // Send user id and time to backend and it will start counting,
  // when stop ride, get time, endLocation, price and prompt for payment.
  //
  // get amont from backend
  const amount = 0.0;
  const his = useHistory();
  const handleOnStopRide = () => {
    fetch('http://localhost:5000/home/endRide', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        userId: userId,
        vehicleId: vhNo,
        startLocation: location,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res['endLocation'] == 'Noob') {
          var balance = window.confirm(
            'Insufficient Balance.\nGo to Add Money?'
          );
          if (balance) {
            his.push('/account/balance');
          } else {
            alert('come back to riding');
          }
        } else {
          var history = window.confirm(
            `Paid Rs.${res['price']}\nGo to Ride History?`
          );
          if (history) {
            his.push('/history');
          } else {
            his.push('/home/start');
          }
          setIsRiding(false);
        }
      })
      .catch((err) => console.log(err));
  };

  const stopRideOnlyIfNear = () => {};
  return (
    <>
      <DetailsContainer>
        <>
          <TextContainer>Riding from: {location[0]}</TextContainer>
          <Button
            onClick={() => {
              handleOnStopRide();
            }}
          >
            Stop Ride and Pay
          </Button>
        </>
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
