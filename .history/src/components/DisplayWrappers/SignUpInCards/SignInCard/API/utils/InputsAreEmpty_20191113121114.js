export const inputsAreEmpty = (setState, emailValue, passwordValue) => {
  setState(prevState => {
    return {
      ...prevState,
      emailInputIsErrored: false,
      passwordInputIsErrored: false
    };
  });

  if (emailValue === "") {
    setState(prevState => {
      return {
        ...prevState,
        emailInputIsErrored: true
      };
    });
    return true;
  }
  if (passwordValue === "") {
    setState(prevState => {
      return {
        ...prevState,
        passwordInputIsErrored: true
      };
    });
    return true;
  }
};
