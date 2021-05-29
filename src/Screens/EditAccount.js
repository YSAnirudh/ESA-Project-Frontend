import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Row, Col, Button} from 'react-bootstrap';
import {useState} from 'react';
import '../CSS/Profile.css';
import logo from '../Assets/DL.png';

export default function EditAccount() {
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
    <div className="form">
      <div className="container">
        <div className="d-flex justify-content-center mb-2">
          <h1 className="account">Account</h1>
        </div>
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
              <Col sm={3}>
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
              <Col sm={3}>
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
              <Col sm={3}>
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
              <Col sm={{span: 10, offset: 2}}>
                <Button type="submit">Save Changes</Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
}
