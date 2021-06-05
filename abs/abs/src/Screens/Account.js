import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Row, Col, Button} from 'react-bootstrap';
import logo from '../Assets/DL.png';
import {BalancePopup} from './BalancePopup';
import '../CSS/Account.css';
import {
  DetailsContainer,
  TextContainer,
  ButtonWrapper,
  AccountHeading,
} from './Elements/AccountElem';
import {useHistory} from 'react-router';

function Account(props) {
  const [location, setlocation] = useState('');
  const [email, setemail] = useState(props.info.email);
  const [username, setusername] = useState(props.info.username);
  const [phnumber, setphnumber] = useState(props.info.phnumber);
  const [editable, seteditable] = useState(false);
  const [balancePopup, setBalancePopup] = useState(false);

  const onViewDLClick = () => {
    setBalancePopup(!balancePopup);
  };

  const locationChange = (e) => {
    console.log(e.target.value);
    setlocation(e.target.value);
  };

  const emailChange = (e) => {
    setemail(e.target.value);
  };

  const usernameChange = (e) => {
    setusername(e.target.value);
  };

  const phnumberChange = (e) => {
    setphnumber(e.target.value);
  };

  const history = useHistory();
  const goToEditProfile = () => {
    history.push('/account/edit');
  };
  const goToViewBalance = () => {
    history.push('/account/balance');
  };

  return (
    <>
      <div style={{marginTop: 50}}>
        <div className="container">
          <h1 className="d-flex justify-content-center mb-2">Account</h1>
          <div className="border-bottom border-danger border-3 mb-3"></div>
          <div className="border-start border-5">
            <Form className="ms-4">
              <Form.Group
                as={Row}
                className="my-3"
                controlId="formHorizontalEmail"
              >
            <Form.Label>Email</Form.Label>
                <Form.Text>{email}</Form.Text>
              </Form.Group>

              <Form.Group
                as={Row}
                className="my-3"
                controlId="formHorizontalPassword"
              >
                <Form.Label>Username</Form.Label>
                <Form.Text>{username}</Form.Text>
              </Form.Group>

              <Form.Group
                as={Row}
                className="my-3"
                controlId="formHorizontalPassword"
              >
                <Form.Label>Phone No</Form.Label>
                <Form.Text>{phnumber}</Form.Text>
              </Form.Group>

              <Form.Group
                as={Row}
                className="my-3"
                controlId="formHorizontalPassword"
              >
                <Form.Label
                  className="my-1 mr-2"
                  htmlFor="inlineFormCustomSelectPref"
                >
                  Driving Licence
                </Form.Label>
                <Form.Text>
                  <img
                    style={{marginRight: 20}}
                    src={logo}
                    width={100}
                    class="img-thumbnail"
                    alt="..."
                  />
                  <Button
                    className="mybutton"
                    style={{width: 'auto'}}
                    onClick={() => onViewDLClick()}
                  >
                    View Driving License
                  </Button>
                </Form.Text>
              </Form.Group>
              <BalancePopup trigger={balancePopup}>
                <h1>Your Driving License</h1>
                <div className="my-3">
                  <img
                    style={{marginRight: 50}}
                    src={logo}
                    width={400}
                    class="img-thumbnail"
                    alt="..."
                  />
                  <button
                    type="button"
                    class="btn btn-danger mx-2"
                    onClick={() => onViewDLClick()}
                    style={{width: 100}}
                  >
                    Close
                  </button>
                </div>
              </BalancePopup>

              {/* <div>
              <Form.Label
                column
                sm={2}
                className="my-1 mr-2"
                htmlFor="inlineFormCustomSelectPref"
              >
                Location
              </Form.Label>
              <Form.Control
                as="select"
                className="my-1 mr-sm-2"
                id="inlineFormCustomSelectPref"
                onChange={locationChange}
                custom
              >
                <option value="India">India</option>
                <option value="Dummy">Dummy</option>
              </Form.Control>
            </div> */}

              <Form.Group as={Row} className="my-3">
                <ButtonWrapper>
                  <Button
                    className="mybutton"
                    onClick={() => goToEditProfile()}
                  >
                    Edit Profile
                  </Button>
                </ButtonWrapper>
              </Form.Group>
              <Form.Group as={Row} className="my-3">
                <ButtonWrapper>
                  <Button
                    className="mybutton"
                    onClick={() => goToViewBalance()}
                  >
                    View Balance
                  </Button>
                </ButtonWrapper>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
