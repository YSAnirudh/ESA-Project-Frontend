const Validator = require("validator");
const isEmpty = require("is-empty");

export  const validateLoginInput = (userData) =>  {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  userData.phoneNo = !isEmpty(userData.phoneNo) ? userData.phoneNo : "";
  userData.password = !isEmpty(userData.password) ? userData.password : "";

  // phoneNo checks
  if (Validator.isEmpty(userData.phoneNo) ) {
    errors.phoneNo = "phoneNumber field is required";
  }else if(!Validator.isLength(userData.phoneNo,{ min: 10, max: 10 })){
    errors.phoneNo = "phone number is in valid"
  }
  // Password checks
  if (Validator.isEmpty(userData.password)) {
    errors.password = "Password field is required";
  }
  var msg1 = !isEmpty(errors.password) ? errors.password : "";
  var msg2 = !isEmpty(errors.phoneNo) ? errors.phoneNo : "";
  var message = msg1 + " " + msg2
  
  return {
    message,
    isValid: isEmpty(errors)
  };
};
