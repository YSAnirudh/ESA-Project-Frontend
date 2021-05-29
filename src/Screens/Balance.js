import React from 'react';
import {useState} from 'react';
import {BalancePopup} from './BalancePopup';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Balance = () => {
  const [balance, setbalance] = useState(0);
  const [buttonpopup, setbuttonpopup] = useState(false);
  const [addmoney, setaddmoney] = useState('');

  const addMoney = (e) => {
    setaddmoney(e.target.value);
    //console.log(addmoney)
  };

  const addedMoney = (e) => {
    setbuttonpopup(false);
    //console.log(balance + addmoney)
    setbalance(parseInt(balance) + parseInt(addmoney));
    setaddmoney('');
  };

  return (
    <div>
      <div className="w-75 my-3 container">
        <h3 className="display-6">ESA Wallet</h3>
      </div>
      <div className="border-bottom"></div>
      <div className="w-75 container mt-3">
        <h3>Welcome to your Wallet, raghuveer</h3>
      </div>
      <div class="card w-75 container my-5">
        <div class="card-body">
          <h5 class="card-title">Balance Money : {balance}</h5>
          <p class="card-text">These are your virtual money.</p>
          <a
            href="#"
            class="btn btn-primary"
            onClick={() => setbuttonpopup(true)}
          >
            Add Money
          </a>
        </div>
        <BalancePopup trigger={buttonpopup}>
          <h1>Add money</h1>
          <input type="number" value={addmoney} onChange={addMoney} />
          <div className="my-3">
            <button
              type="button"
              className="btn btn-success"
              onClick={addedMoney}
            >
              Add
            </button>
            <button
              type="button"
              class="btn btn-danger mx-2"
              onClick={() => setbuttonpopup(false)}
            >
              Cancel
            </button>
          </div>
        </BalancePopup>
      </div>
    </div>
  );
};
