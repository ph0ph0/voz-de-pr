export const inputsAreEmpty = (
  setState,
  firstNameValue,
  lastNameValue,
  usernameValue,
  firstEmailValue,
  locationValue,
  firstPasswordValue,
  selectedAvatar
) => {
  // Clear all errors before setting them
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

  //This flag is returned to the caller and indicates if any of the fields were empty
  var flag = false;

  if (firstNameValue === "") {
    window.log("first name value was empty");
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
  if (firstEmailValue === "") {
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
  if (firstPasswordValue === "") {
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
