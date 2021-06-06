import axios from 'axios';

export const registerUser = (userData, history) => {
  axios
    .post('https://jeldi.herokuapp.com/login/register', userData)
    .then((res) => {
      history.push('/login');
    })
    .catch(function (error) {
      if (error.response) {
        alert(
          'PhoneNumber,License number and Email already exist, Please enter unique details'
        );
      }
    });
};
