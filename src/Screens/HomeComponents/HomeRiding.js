import React, {useState} from 'react';
import {useHistory} from 'react-router';
import {Button, DetailsContainer, TextContainer} from '../Elements/HomeElem';

const HomeRiding = ({
  location,
  setIsRiding,
  userId,
  vhNo,
  handleGetHistory,
}) => {
  const his = useHistory();
  const handleOnStopRide = () => {
    fetch('http://jeldi.herokuapp.com/home/endRide', {
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
        console.log(res);
        if (res['endLocation'] === 'Noob') {
          var balance = window.confirm(
            'Insufficient Balance.\nGo to Add Money?'
          );
          if (balance) {
            his.push('/account/balance');
          }
        } else {
          var history = window.confirm(
            `Paid Rs.${res['price']}\nGo to Ride History?`
          );
          if (history) {
            his.push('/history');
            handleGetHistory();
          } else {
            his.push('/home/start');
          }
          setIsRiding(false);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <DetailsContainer>
        <>
          <TextContainer>Riding from: {location[0]}</TextContainer>
          <TextContainer>On Vehicle No.: {vhNo}</TextContainer>
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
