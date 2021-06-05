import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Row, Col, Button} from 'react-bootstrap';
import {useState} from 'react';
import '../CSS/Profile.css';
import {ButtonWrapper} from './Elements/AccountElem';
import '../CSS/Account.css';
import {useHistory} from 'react-router';

export default function EditAccount({
  profiledata,
  setProfileData,
  handleGetProfileData,
  handleEditProfile,
}) {
  const [email, setemail] = useState(profiledata.email);
  const [username, setusername] = useState(profiledata.username);
  const [phnumber, setphnumber] = useState(profiledata.phoneNo);
  const [licenseNo, setLicenseNo] = useState(profiledata.licenseNo);

  const profileDataChange = () => {
    setProfileData(username, phnumber, email, licenseNo);
    handleEditProfile(username, email, phnumber, licenseNo);
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

  const lnumberChange = (e) => {
    setLicenseNo(e.target.value);
  };
  const history = useHistory();
  const goToAccount = () => {
    history.push('/account');
    handleGetProfileData();
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
                  <Form.Label column sm={3}>
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
                  <Form.Label column sm={3}>
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
                  <Form.Label column sm={3}>
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

                <Form.Group
                  as={Row}
                  className="my-3"
                  controlId="formHorizontalPassword"
                >
                  <Form.Label column sm={3}>
                    License No
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="License No"
                      value={licenseNo}
                      onChange={lnumberChange}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="my-3">
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}
                  >
                    <ButtonWrapper>
                      <Button
                        type="submit"
                        className="mybutton"
                        onClick={() => {
                          goToAccount();
                        }}
                      >
                        Go Back
                      </Button>
                    </ButtonWrapper>
                    <ButtonWrapper>
                      <Button
                        type="submit"
                        className="mybutton"
                        onClick={() => {
                          profileDataChange();
                        }}
                      >
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
