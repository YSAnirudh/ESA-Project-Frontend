const Validator = require("validator");
const isEmpty = require("is-empty");


export const validateRegisterInput = (userData) =>{
    let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  userData.username = !isEmpty(userData.username) ? userData.username : "";
  userData.phoneNo = !isEmpty(userData.phoneNo)?userData.phoneNo:""
  userData.email = !isEmpty(userData.email) ? userData.email : "";
  userData.password = !isEmpty(userData.password) ? userData.password : "";
  userData.password2 = !isEmpty(userData.password2) ? userData.password2 : "";
  userData.licenseNo = !isEmpty(userData.licenseNo) ? userData.licenseNo:"";
console.log("in valid",userData);
  // username checks
  if (Validator.isEmpty(userData.username)) {
    errors.username = "username field is required";
  }
if(Validator.isEmpty(userData.phoneNo)){
  errors.phoneNo = "Phone number field is required"
} else if(!Validator.isLength(userData.phoneNo,{ min: 10, max: 10 })){
  errors.phoneNo = "phone number is in valid"
}
  // Email checks
  if (Validator.isEmpty(userData.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(userData.email)) {
    errors.email = "Email is invalid";
  }

  // Password checks
  if (Validator.isEmpty(userData.password)) {
    errors.password = "Password field is required";
  } else if (!Validator.isLength(userData.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  if (Validator.isEmpty(userData.password2)) {
    errors.password2 = "Confirm password field is required";
  }

  

  if (!Validator.equals(userData.password, userData.password2)) {
    errors.password2 = "Passwords must match";
  }
  if(Validator.isEmpty(userData.licenseNo)){
      errors.licenseNo = "License number field is required"
  }
  var msg1 = !isEmpty(errors.password) ? errors.password : "";
  var msg2 = !isEmpty(errors.phoneNo) ? errors.phoneNo : "";
  var msg3 = !isEmpty(errors.password2) ? errors.password2 : "";
  var msg4 = !isEmpty(errors.email) ? errors.email : "";
  var msg5 = !isEmpty(errors.username) ? errors.username : "";
  var msg6 = !isEmpty(errors.licenseNo) ? errors.licenseNo : "";
  var message = msg5 + " " +msg2 + " " + msg6 + " " +msg4+ " " +msg1+ " " +msg3;
  return {
    message,
    isValid: isEmpty(errors)
  };
};
