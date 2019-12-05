export const inputsAreEmpty = (setState, emailValue, passwordValue) => {
  setState(prevState => {
    return {
      ...prevState,
      emailInputIsErrored: false,
      passwordInputIsErrored: false
    };
  });

  //This flag is returned to the caller and indicates if any of the fields were empty
  var flag = false;

  if (emailValue === "") {
    window.log("email was empty");
    setState(prevState => {
      return {
        ...prevState,
        emailInputIsErrored: true
      };
    });
    flag = true;
  }
  if (passwordValue === "") {
    window.log("password was empty");
    setState(prevState => {
      return {
        ...prevState,
        passwordInputIsErrored: true
      };
    });
    flag = true;
  }

  return flag;
};
