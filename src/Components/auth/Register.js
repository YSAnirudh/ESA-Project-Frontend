import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import {Form, FormControl, FormGroup} from 'react-bootstrap';
import '../../CSS/Register.css';
import {Link} from 'react-router-dom';

import {
  HeroContainer,
  Button,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from '../layout/HeroElements';
import video1 from '../../Videos/video1.mp4';
const {registerUser} = require('../../actions/regesiter');
const {validateRegisterInput} = require('../../validation/registerValidation');

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      phoneNo: '',
      email: '',
      password: '',
      password2: '',
      licenseNo: '',
      errors: {},
      hover: false,
      setHover: false,
    };
  }

  onChange = (e) => {
    this.setState({[e.target.id]: e.target.value});
  };
  onHover = () => {
    this.setState({setHover: !this.hover});
  };
  onSubmit = (e) => {
    e.preventDefault();
    const validateUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      phoneNo: this.state.phoneNo,
      licenseNo: this.state.licenseNo,
    };
    var validate = validateRegisterInput(validateUser);
    if (validate.isValid) {
      const newUser = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        phoneNo: this.state.phoneNo,
        licenseNo: this.state.licenseNo,
      };

      registerUser(newUser, this.props.history);
    } else {
      alert(validate.message);
    }
  };

  render() {
    const {errors} = this.state;
    return (
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={video1} type="video/mp4"></VideoBg>
        </HeroBg>
        <HeroContent style={{marginBottom: '0%', width: '30%'}}>
          <Card
            style={{
              width: '100%',
              padding: '1.5em',
              background: 'transparent',
              boxShadow: '-1px -1px 14px 5px rgba(0,96,56,0.54)',
            }}
          >
            <Form>
              <h4 style={{color: '#fff'}}>Register</h4>

              <FormGroup>
                <p className="para">Name </p>
                <FormControl
                  type="text"
                  onChange={this.onChange}
                  value={this.state.username}
                  id="username"
                  placeholder="Enter User Name"
                />
              </FormGroup>

              <FormGroup>
                <br />
                <p className="para">Phonenumber </p>
                <FormControl
                  onChange={this.onChange}
                  value={this.state.phoneNo}
                  error={errors.phoneNo}
                  id="phoneNo"
                  type="tel"
                  placeholder="Enter Phone Number"
                />{' '}
              </FormGroup>

              <FormGroup>
                <br />
                <p className="para">LicenseNumber</p>
                <FormControl
                  onChange={this.onChange}
                  value={this.state.licenseNo}
                  error={errors.licenseNo}
                  id="licenseNo"
                  type="text"
                  placeholder="Enter LicenseNumber "
                />
              </FormGroup>
              <FormGroup>
                <br />
                <p className="para">Email</p>
                <FormControl
                  type="email"
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  placeholder="Enter Email "
                />
              </FormGroup>
              <FormGroup>
                <br />
                <p className="para">Password</p>

                <FormControl
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password2}
                  id="password"
                  type="password"
                  placeholder="Enter password"
                />
              </FormGroup>
              <FormGroup>
                <br />
                <p className="para">confirm Password</p>

                <FormControl
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  placeholder="confirm password"
                />
              </FormGroup>
              <HeroBtnWrapper>
                <Button
                  onClick={this.onSubmit}
                  onMouseEnter={this.onHover}
                  onMouseLeave={this.onHover}
                  primary="true"
                  dark="true"
                >
                  Register {this.hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
              </HeroBtnWrapper>
              <br />
            </Form>
          </Card>
        </HeroContent>
      </HeroContainer>
    );
  }
}

export default Register;
