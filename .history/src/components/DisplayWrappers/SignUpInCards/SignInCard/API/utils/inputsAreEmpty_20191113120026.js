export const inputsAreEmpty = (
  emailValue,
  passwordValue,
  emailInputIsErrored,
  passwordInputIsErrored,
  setState
) => {
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
