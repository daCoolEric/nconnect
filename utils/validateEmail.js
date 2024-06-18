const validateEmail = (email) => {
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+@nia.gov.gh$/;
    // return emailRegex.test(email);
    const isEmailValid = email.endsWith("@nia.gov.gh");
    return isEmailValid;
  }

export default validateEmail;
  
//   const email = 'example@email.com';
//   if(validateEmail(email)) {
//     console.log('Email is valid');
//   } else {
//     console.log('Email is not valid');
//   }