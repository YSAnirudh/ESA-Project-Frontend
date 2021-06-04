import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Row, Col, Button} from 'react-bootstrap';
import {useState} from 'react';
import '../CSS/Profile.css';
import {ButtonWrapper} from './Elements/AccountElem';
import logo from '../Assets/DL.png';
import '../CSS/Account.css';
export default function EditAccount(props) {
  const [location, setlocation] = useState('');
  const [email, setemail] = useState(props.info.email);
  const [username, setusername] = useState(props.info.username);
  const [phnumber, setphnumber] = useState(props.info.phnumber);
  const [editable, seteditable] = useState(false);

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

  return (
    <div className="form" style={{backgroundColor: 'white'}}>
      <div className="container">
        <div style={{marginTop: 50}}>
          <div className="d-flex justify-content-center mb-2">
            <h1 className="account">Edit Account</h1>
          </div>
          <div className="border-bottom border-danger border-3 mb-3"></div>
          <div style={{marginLeft: -10}}>
            <div className="border-start border-5">
              <Form className="ms-4">
                <Form.Group
                  as={Row}
                  className="my-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label column sm={2}>
                    Email
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={emailChange}
                    />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="my-3"
                  controlId="formHorizontalPassword"
                >
                  <Form.Label column sm={2}>
                    UserName
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={usernameChange}
                    />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="my-3"
                  controlId="formHorizontalPassword"
                >
                  <Form.Label column sm={2}>
                    Phone No
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Phone Number"
                      value={phnumber}
                      onChange={phnumberChange}
                    />
                  </Col>
                </Form.Group>

                {/* <div>
              <Form.Label
                column
                sm={2}
                className="my-1 mr-2"
                htmlFor="inlineFormCustomSelectPref"
              >
                Driving Licence
              </Form.Label>
              <img src={logo} class="img-thumbnail" alt="..." />
            </div> */}

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
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}
                  >
                    <ButtonWrapper>
                      <Button type="submit" className="mybutton">
                        Save Changes
                      </Button>
                    </ButtonWrapper>
                  </div>
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
