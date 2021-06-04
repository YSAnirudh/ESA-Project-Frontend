import React from 'react';
import {useState, useEffect} from 'react';
import {BalancePopup} from './BalancePopup';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory} from 'react-router';

function Balance({
  balance,
  setBalance,
  profileDetails,
  userId,
  getBal,
  username,
}) {
  const [bal, setbalance] = useState(parseInt(balance));
  const [buttonpopup, setbuttonpopup] = useState(false);
  const [addmoney, setaddmoney] = useState('');

  useEffect(() => {
    getBal();
  }, []);

  const addMoney = (e) => {
    setaddmoney(e.target.value);
    //console.log(addmoney)
  };

  const handleAddMoney = (money) => {
    fetch('http://localhost:5000/wallet/addMoney', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({userId: userId, money: money}),
    })
      .then((response) => response.json())
      .then((res) => {
        setbalance(res['balance']);
        setBalance(res['balance']);
      })
      .catch((err) => console.log(err));
  };

  const addedMoney = (e) => {
    setbuttonpopup(false);
    setaddmoney('');
    handleAddMoney(addmoney);
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
        <h3>Welcome to your Wallet, {username}</h3>
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
          <input
            type="number"
            className="beerMistakeCorrecting"
            value={addmoney}
            onChange={addMoney}
          />
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
