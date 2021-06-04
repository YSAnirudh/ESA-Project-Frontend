import axios from "axios";
import React from 'react'

export const loginUser = (userData,props, history) => {

    const options = {
        headers: {"Access-Control-Allow-Origin": "*"}
      };
    axios
      .post("https://jeldi.herokuapp.com/login/signIn", userData,options)
     
      .then(res =>{
         const {userId} = res.data
        localStorage.setItem("userId",userId)
        
        props.updateIsLogin();
        history.push('/home');
        console.log(res)
      } )
      .catch(
        function (error) {
          if (error.response) {
            
            alert('please enter correct password , phonenumber')
            
          }
        }
      );
  };