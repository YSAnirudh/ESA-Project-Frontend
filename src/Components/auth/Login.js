import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Row, Col} from 'react-bootstrap';
import {Form, Button, Image} from 'react-bootstrap';
const {loginUser} = require('../../actions/loginuser');
const {validateLoginInput} = require('../../validation/loginValidation');
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNo: '',
      password: '',
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({[e.target.id]: e.target.value});
  };

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      phoneNo: this.state.phoneNo,
      password: this.state.password,
    };
    var validate = validateLoginInput(userData);
    console.log(validate);
    if (validate.isValid) {
      loginUser(
        userData,
        this.props,
        this.props.history,
        this.props.setIsLogin
      );
    } else {
      alert(validate.message);
    }
  };

  render() {
    return (
      <Row>
        <Col xl={6}>
          <Form
            style={{
              width: '50%',
              height: '50%',
              marginLeft: '10%',
              marginTop: '10%',
            }}
          >
            <Form.Group>
              <Form.Label>Enter your PhoneNumber</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your Phonenumber"
                onChange={this.onChange}
                value={this.state.phoneNo}
                id="phoneNo"
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Enter your password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                onChange={this.onChange}
                value={this.state.password}
                id="password"
              />
            </Form.Group>
            <br />
            <Button type="submit" onClick={this.onSubmit}>
              Submit
            </Button>
          </Form>
        </Col>
        <Col xl={6}>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRP3e-HQRp8k0qWIH0myLVZD9fU5qYO5ZMIQ-XfIcruNPX-SWtCeh4y_5vKbi9JXq1c98&usqp=CAU"
            thumbnail
            style={{
              border: 'none',
              width: '80%',
              marginLeft: '10%',
              marginTop: '10%',
            }}
          />
        </Col>
      </Row>
    );
  }
}

export default Login;
