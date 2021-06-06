import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "@material-ui/core/Card";
import "../../CSS/LoginStyling.css";
import {Row, Col} from 'react-bootstrap';
import {Form,  Image} from 'react-bootstrap';
import{ 
HeroContainer,
Button,
HeroBg,
VideoBg,
HeroContent,
HeroBtnWrapper,
ArrowForward,
ArrowRight,
} from '../layout/HeroElements';
import video1 from '../../Videos/video1.mp4'
const {loginUser} = require('../../actions/loginuser');
const {validateLoginInput} = require('../../validation/loginValidation');
class Login extends Component {

  
 
  constructor(props) {
    super(props);
    this.state = {
      phoneNo: '',
      password: '',
      errors: {},
      hover:false,
      setHover:false,

    };
  }
  onHover = () => {
    this.setState({setHover : !this.hover});
  };
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

      <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video1} type="video/mp4"></VideoBg>
      </HeroBg>
      <HeroContent style = {{marginBottom:"20%",width:"30%"}}>
      
<Card  style={{
        width:"100%",padding:"1.5em", background:"transparent",boxShadow: "-1px -1px 14px 5px rgba(0,96,56,0.54)"
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
         <p className = "para">Password</p>
         <Form.Control 
         type="password" 
         placeholder="Enter your password" 
         onChange={this.onChange}
         value={this.state.password}
         id="password"/>
     </Form.Group>
     <br/>
    

    <HeroBtnWrapper>
          <Button
            onClick={this.onSubmit}
            onMouseEnter={this.onHover}
            onMouseLeave={this.onHover}
            primary="true"
            dark="true"
          >
            Login {this.hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
     <br/>
 </Form>


<br/>
      </Card>


</HeroContent>
</HeroContainer>

    );
  }
}

export default Login;
