import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "../../../node_modules/jquery/dist/jquery.min.js";
import "bootstrap/js/src/collapse.js";
//import { Navbar,Nav } from 'react-bootstrap'
import * as ReactBootStrap from "react-bootstrap"
import '../../App.css'
class Nave extends Component {
  render() {
    return (
     
  <div >
    <ReactBootStrap.Navbar collapseOnSelect className = "navbar-light" expand="lg" bg="primary" variant="dark" >
        <ReactBootStrap.Navbar.Brand href="/">React-Bootstrap</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="ml-auto">
            <ReactBootStrap.Nav.Link href="/login"><span>Login</span></ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/register">Signup</ReactBootStrap.Nav.Link>
            
          </ReactBootStrap.Nav>
          
        </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
  </div>
    
    );
  }
}

export default Nave;
