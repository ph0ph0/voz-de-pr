export const inputsAreEmpty = setState => {
  setState(prevState => {
    return {
      ...prevState,
      firstNameInputIsErrored: false,
      lastNameInputIsErrored: false,
      usernameInputIsErrored: false,
      emailInputIsErrored: false,
      locationInputIsErrored: false,
      passwordInputIsErrored: false,
      avatarInputIsErrored: false
    };
  });

  var flag = false;

  if (firstNameValue === "") {
    window.log(`first name value was empty`);
    setState(prevState => {
      return {
        ...prevState,
        firstNameInputIsErrored: true
      };
    });
    flag = true;
  }
  if (lastNameValue === "") {
    setState(prevState => {
      return {
        ...prevState,
        lastNameInputIsErrored: true
      };
    });
    flag = true;
  }
  if (usernameValue === "") {
    setState(prevState => {
      return {
        ...prevState,
        usernameInputIsErrored: true
      };
    });
    flag = true;
  }
  if (emailValue === "") {
    setState(prevState => {
      return {
        ...prevState,
        emailInputIsErrored: true
      };
    });
    flag = true;
  }
  if (locationValue === "") {
    setState(prevState => {
      return {
        ...prevState,
        locationInputIsErrored: true
      };
    });
    flag = true;
  }
  if (passwordValue === "") {
    setState(prevState => {
      return {
        ...prevState,
        passwordInputIsErrored: true
      };
    });
    flag = true;
  }
  if (selectedAvatar === null) {
    setState(prevState => {
      return {
        ...prevState,
        avatarInputIsErrored: true
      };
    });
    flag = true;
  }
  return flag;
};
