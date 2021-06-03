import axios from "axios";

export const registerUser = (userData, history) => {
    axios
      .post("https://jeldi.herokuapp.com/login/register", userData)
      .then(res =>{
        history.push("/login")
        console.log(res)
      } )
      .catch(err =>{
        
        if(err.status === 400){
          console.log("error")
        }
      }
        
      );
  };