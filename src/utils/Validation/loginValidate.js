const loginValidate = (formData) => {
    console.log(formData);
    const validationErrors = {};
  
     if (
      !formData.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
    ) {
      validationErrors.email = "Invalid email.";
    } else if(formData.password.length < 5) {
      validationErrors.password = "Password must be at least 5 characters.";
    }
    console.log(validationErrors);
  
    return {validationErrors,valid:Object.keys(validationErrors).length < 1};
  };
  
  export default loginValidate;
  