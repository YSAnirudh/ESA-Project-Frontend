import React from 'react';
import {useState} from 'react';
import {BalancePopup} from './BalancePopup';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory} from 'react-router';

function Balance({balance, setBalance}) {
  const [bal, setbalance] = useState(parseInt(balance));
  const [buttonpopup, setbuttonpopup] = useState(false);
  const [addmoney, setaddmoney] = useState('');

  const addMoney = (e) => {
    setaddmoney(e.target.value);
    //console.log(addmoney)
  };

  const addedMoney = (e) => {
    setbuttonpopup(false);
    const tempBalance = parseInt(bal) + parseInt(addmoney);
    setbalance(tempBalance);
    setaddmoney('');
    setBalance(tempBalance);
  };

  const history = useHistory();
  const goToAccount = () => {
    history.push('/account');
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
          <h5 class="card-title">Balance Money : {bal}</h5>
          <p class="card-text">This is your virtual money.</p>
          <a
            href="#"
            class="btn btn-primary"
            onClick={() => setbuttonpopup(true)}
          >
            Add Money
          </a>
          <a href="#" class="btn btn-primary" onClick={goToAccount}>
            Go Back
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
}

export default Balance;
