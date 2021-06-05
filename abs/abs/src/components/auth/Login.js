import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Card from "@material-ui/core/Card";
import "../../CSS/LoginStyling.css";

//import {homeAfterLogin} from '../../Constants/RouteInfo';
import { Container, Row, Col } from 'react-bootstrap'
import {Form, Button,Image} from 'react-bootstrap';
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
      // <Container>
      //   <Row>
          
      //       <Col xs={{size: 8, offset: 2 }}>

            

      //       <Link to="/" class="btn-flat waves-effect">
      //         <i class="material-icons left">keyboard_backspace</i> Back to
      //         home
      //       </Link>
      //       <Col xs="12" style={{paddingLeft: '11.250px'}}>
      //         <h4>
      //           <b>Login</b> below
      //         </h4>
      //         <p class="grey-text text-darken-1">
      //           Don't have an account? <Link to="/register">Register</Link>
      //         </p>
      //       </Col>
< div className="bod">
<Card  style={{minWidth:"38%",
       width:"38%" ,padding:"1.5em", background:" #01BF71",boxShadow: "0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)"
      }} >
 
  <br/>        
 <Form >

     <Form.Group >
       <p className = "header">LOGIN</p>
        <p className = "para">Phonenumber</p> 
         <Form.Control 
         type="tel" 
         placeholder="Enter your Phonenumber" 
         onChange={this.onChange}
         value={this.state.phoneNo}
         id="phoneNo"
         />
     </Form.Group>
     <br/>
     <Form.Group >
         <p className = "para">password</p>
         <Form.Control 
         type="password" 
         placeholder="Enter your password" 
         onChange={this.onChange}
         value={this.state.password}
         id="password"/>
     </Form.Group>
     <br/>
     <Button type="submit" onClick = {this.onSubmit} className = "button">Submit</Button>
     <br/>
 </Form>


<br/>
      </Card>


</ div>

     
      
     
           
    );
  }
}



export default Login
