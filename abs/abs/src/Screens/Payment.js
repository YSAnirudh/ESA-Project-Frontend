import React from 'react';
import {Button} from 'react-scroll';
import {homeStart} from '../Constants/RouteInfo';
import {ButtonRoute} from './Elements/HomeElem';

const Payment = () => {
  return (
    <>
      <ButtonRoute to={homeStart}>Payment</ButtonRoute>
    </>
  );
};

export default Payment;
