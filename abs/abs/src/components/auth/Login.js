import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

//import {homeAfterLogin} from '../../Constants/RouteInfo';
import { Container, Row, Col } from 'react-bootstrap'
const {loginUser}  = require('../../actions/loginuser')
const {validateLoginInput} = require('../../validation/loginValidation')
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
    var validate = validateLoginInput(userData)
    console.log(validate)
    if(validate.isValid){
      loginUser(userData,this.props,this.props.history)
    } else {
      alert(validate.message)
    }
   // loginUser(userData,this.props,this.props.history)
  };

  render() {
    
    return (
      <Container>
        <Row>
          
            <Col xs={{size: 8, offset: 2 }}>

            

            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <Col xs="12" style={{paddingLeft: '11.250px'}}>
              <h4>
                <b>Login</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </Col>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.phoneNo}
                 
                  id="phoneNo"
                  type="tel"
                 
                />
                <label htmlFor="phoneNo">phonenumber</label>
               
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  
                  id="password"
                  type="password"
                 
                />
                <label htmlFor="password">Password</label>
                
              </div>
              <div className="col s12" style={{paddingLeft: '11.250px'}}>
                <button
                  style={{
                    width: '150px',
                    borderRadius: '3px',
                    letterSpacing: '1.5px',
                    marginTop: '1rem',
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
              </div>
            </form>
          
          </Col>
        </Row>
      </Container>
    );
  }
}



export default Login
