import React, {Component} from 'react';
import Card from "@material-ui/core/Card";
import { Form, FormControl, FormGroup ,Button} from "react-bootstrap";
import "../../CSS/Register.css";
import {Link} from 'react-router-dom';
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
    };
  }

  onChange = (e) => {
    this.setState({[e.target.id]: e.target.value});
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
    console.log('data:', validateUser);
    var validate = validateRegisterInput(validateUser);
    console.log(validate);
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
      <div className ="bod"> 
         <Card style={{minWidth:"38%",
      padding:"1.9em", background:" #01BF71",boxShadow: "0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)"

      }}  >
        <Form>
            <h4>Register</h4>

            <FormGroup>
              <p className="para">Name </p>
              <FormControl 
              type = "text"
              onChange={this.onChange}
              value={this.state.username}
                id="username"
                placeholder="Enter User Name" />
            </FormGroup>

            <FormGroup>
            <br/>
              <p className="para">Phonenumber </p>

              <FormControl
              onChange={this.onChange}
               value={this.state.phoneNo}
                error={errors.phoneNo}
               id="phoneNo"
                type="tel"
                placeholder="Enter Phone Number"

              /> </FormGroup>

              <FormGroup>
              <br/>
              <p className = "para">LicenseNumber</p>
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
              <br/>
                <p className = "para">Email</p>
                <FormControl
                type="email"
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
                id ="email"
                placeholder="Enter Email "

                />
              </FormGroup>

              <FormGroup>
              <br/>
                <p className = "para">Password</p>

                <FormControl
                onChange={this.onChange}
                value={this.state.password2}
                error={errors.password2}
                id="password2"
                type="password"

                />
              </FormGroup>
              <br/>
              <Button type="submit" onClick = {this.onSubmit} className = "button">Submit</Button>

        </Form>
      </Card>


        </div>
    );
  }
}

export default Register;