import React, { Component } from "react";
import { Link } from "react-router-dom";
const {registerUser}  = require('../../actions/regesiter')
const {validateRegisterInput} = require('../../validation/registerValidation')

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      phoneNo:"",
      email: "",
      password: "",
      password2: "",
      licenseNo : "",
      errors: {}
    };
  }

  

  
  
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    
    e.preventDefault();
    const validateUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2:this.state.password2,
      phoneNo:this.state.phoneNo,
      licenseNo:this.state.licenseNo,
     
    };
    console.log("data:",validateUser)
    var validate = validateRegisterInput(validateUser)
    console.log(validate)
    if(validate.isValid){
      const newUser = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        phoneNo:this.state.phoneNo,
        licenseNo:this.state.licenseNo
      };
  
      registerUser(newUser, this.props.history); 
    }else{
      alert(validate.message);
    }
    
    
  };

  render() {
    const { errors } = this.state;

    return (
      
      <div className="container">
        
         
        <div className="col-12 col-md-4">
          
          
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.username}
                  error={errors.username}
                  id="username"
                  type="text"
                  
                />
                <label htmlFor="name">Name</label>
                <span style={{color: "red"}}>{errors.username}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.phoneNo}
                  error={errors.phoneNo}
                  id="phoneNo"
                  type="tel"
                 
                />
                <label htmlFor="phoneNo">Phonenumber</label>
                
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.licenseNo}
                  error={errors.licenseNo}
                  id="licenseNo"
                  type="text"
                  
                />
                <label htmlFor="licenseNo">licenseNumber</label>
               
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  
                />
                <label htmlFor="email">Email</label>
                
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                />
                <label htmlFor="password">Password</label>
                
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                 
                />
                <label htmlFor="password2">Confirm Password</label>
                
              </div>
              
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Sign up
                </button>
              </div>
            </form>
            
          </div>
          <div className="col-12 col-md-4">
        <form>
        
        </form>
        </div>

        </div>
      </div>
        
      
    );
  }
}

export default Register