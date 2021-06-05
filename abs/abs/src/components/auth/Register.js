import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import { Form, FormControl, FormGroup ,Button} from "react-bootstrap";
import "../../CSS/Register.css";

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
      
      // <div className="container">
        
         
      //   <div className="col-12 col-md-4">
          
          
      //       <Link to="/" className="btn-flat waves-effect">
      //         <i className="material-icons left">keyboard_backspace</i> Back to
      //         home
      //       </Link>
      //       <div className="col s12" style={{ paddingLeft: "11.250px" }}>
      //         <h4>
      //           <b>Register</b> below
      //         </h4>
      //         <p className="grey-text text-darken-1">
      //           Already have an account? <Link to="/login">Log in</Link>
      //         </p>
      //       </div>
      //   </div>
      //   <div className="row">
      //     <div className="col-12 col-md-4">
      //       <form noValidate onSubmit={this.onSubmit}>
      //         <div className="input-field col s12">
      //           <input
      //             onChange={this.onChange}
      //             value={this.state.username}
      //             error={errors.username}
      //             id="username"
      //             type="text"
                  
      //           />
      //           <label htmlFor="name">Name</label>
      //           <span style={{color: "red"}}>{errors.username}</span>
      //         </div>
      //         <div className="input-field col s12">
      //           <input
      //             onChange={this.onChange}
      //             value={this.state.phoneNo}
      //             error={errors.phoneNo}
      //             id="phoneNo"
      //             type="tel"
                 
      //           />
      //           <label htmlFor="phoneNo">Phonenumber</label>
                
      //         </div>
      //         <div className="input-field col s12">
      //           <input
      //             onChange={this.onChange}
      //             value={this.state.licenseNo}
      //             error={errors.licenseNo}
      //             id="licenseNo"
      //             type="text"
                  
      //           />
      //           <label htmlFor="licenseNo">licenseNumber</label>
               
      //         </div>
      //         <div className="input-field col s12">
      //           <input
      //             onChange={this.onChange}
      //             value={this.state.email}
      //             error={errors.email}
      //             id="email"
      //             type="email"
                  
      //           />
      //           <label htmlFor="email">Email</label>
                
      //         </div>
      //         <div className="input-field col s12">
      //           <input
      //             onChange={this.onChange}
      //             value={this.state.password}
      //             error={errors.password}
      //             id="password"
      //             type="password"
      //           />
      //           <label htmlFor="password">Password</label>
                
      //         </div>
      //         <div className="input-field col s12">
      //           <input
      //             onChange={this.onChange}
      //             value={this.state.password2}
      //             error={errors.password2}
      //             id="password2"
      //             type="password"
                 
      //           />
      //           <label htmlFor="password2">Confirm Password</label>
                
      //         </div>
              
      //         <div className="col s12" style={{ paddingLeft: "11.250px" }}>
      //           <button
      //             style={{
      //               width: "150px",
      //               borderRadius: "3px",
      //               letterSpacing: "1.5px",
      //               marginTop: "1rem"
      //             }}
      //             type="submit"
      //             className="btn btn-large waves-effect waves-light hoverable blue accent-3"
      //           >
      //             Sign up
      //           </button>
      //         </div>
      //       </form>
            
      //     </div>
      //     <div className="col-12 col-md-4">
      //   <form>
        
      //   </form>
      //   </div>

      //   </div>
      // </div>

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

export default Register