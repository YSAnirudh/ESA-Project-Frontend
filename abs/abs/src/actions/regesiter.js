import axios from "axios";

export const registerUser = (userData, history) => {
    axios
      .post("https://jeldi.herokuapp.com/login/register", userData)
      .then(res =>{
        history.push("/login")
        console.log(res)
      } )
      .catch(
        function (error) {
          if (error.response) {
            
            alert('PhoneNumber,Licensenumber and Email already exsist,please enter unique details ')
            
          }
        }
      );
  };