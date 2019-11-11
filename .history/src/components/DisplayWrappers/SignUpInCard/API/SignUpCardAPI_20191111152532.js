import { locations } from "../../../../Constants/Constants";

const SignUpInCardAPI = ({ state, setState }) => {
  const firstNameValue = state.firstNameValue;
  const lastNameValue = state.lastNameValue;
  const usernameValue = state.usernameValue;
  const emailValue = state.emailValue;
  const passwordValue = state.passwordValue;
  const locationValue = state.locationValue;
  const selectedLocation = state.selectedLocation;
  const listOpen = state.listOpen;
  const selectedAvatar = state.selectedAvatar;
  const isSignUp = state.isSignUp;
  const firstNameInputIsErrored = state.firstNameInputIsErrored;
  const lastNameInputIsErrored = state.lastNameInputIsErrored;
  const usernameInputIsErrored = state.usernameInputIsErrored;
  const emailInputIsErrored = state.emailInputIsErrored;
  const locationInputIsErrored = state.locationInputIsErrored;
  const passwordInputIsErrored = state.passwordInputIsErrored;
  const avatarInputIsErrored = state.avatarInputIsErrored;

  // const inputErrorState = {
  //   nameInput: { isErrored: state.inputErrorState.nameInput.isErrored },
  //   usernameInput: { isErrored: state.inputErrorState.usernameInput.isErrored },
  //   emailInput: { isErrored: state.inputErrorState.emailInput.isErrored },
  //   passwordInput: { isErrored: state.inputErrorState.passwordInput.isErrored },
  //   locationInput: { isErrored: state.inputErrorState.locationInput.isErrored },
  //   passwordInput: { isErrored: state.inputErrorState.passwordInput.isErrored },
  //   avatarInput: { isErrored: state.inputErrorState.avatarInput.isErrored }
  // };

  const inputsAreEmpty = () => {
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

  //Fires when the user types in the name field
  const updateFirstNameValue = newValue => {
    setState(prevState => {
      return {
        ...prevState,
        firstNameValue: newValue
      };
    });
    window.log(`firstNameValue: ${newValue}`);
  };

  const updateLastNameValue = newValue => {
    setState(prevState => {
      return {
        ...prevState,
        lastNameValue: newValue
      };
    });
    window.log(`lastNameValue: ${newValue}`);
  };

  const updateUsernameValue = newValue => {
    setState(prevState => {
      return {
        ...prevState,
        usernameValue: newValue
      };
    });
    window.log(`usernameValue: ${newValue}`);
  };

  const updateEmailValue = newValue => {
    setState(prevState => {
      return {
        ...prevState,
        emailValue: newValue
      };
    });
    window.log(`emailValue: ${newValue}`);
  };

  const updatePasswordValue = newValue => {
    setState(prevState => {
      return {
        ...prevState,
        passwordValue: newValue
      };
    });
    window.log(`passwordValue: ${newValue}`);
  };

  //Fires when the user clicks on the Inline Content wrapper. Opens the drop down and displays the locations
  const toggleList = () => {
    const newValue = !listOpen;
    setState(prevState => {
      return {
        ...prevState,
        listOpen: newValue
      };
    });
    window.log(`listOpen: ${newValue}`);
  };

  ////Called when the user types into the LocationInput component
  const updateLocationValue = newValue => {
    setState(prevState => {
      return {
        ...prevState,
        locationValue: newValue
      };
    });
    window.log(`locationValue: ${newValue}`);
  };

  // Fires when a location from the dropdown is clicked, set it as the locationValue and the selected location value
  const onLocationSelected = newValue => {
    setState(prevState => {
      return {
        ...prevState,
        listOpen: false,
        locationValue: newValue,
        selectedLocation: newValue
      };
    });
    window.log(`locationSelected: ${newValue}`);
  };

  const onClickAv = key => {
    const selectedKey = key;
    setState(prevState => {
      return {
        ...prevState,
        selectedAvatar: selectedKey
      };
    });
    window.log(`avatar selected: ${selectedKey}`);
  };

  const toggleSignUp = () => {
    window.log(`toggling signup`);
    setState(prevState => {
      return {
        ...prevState,
        isSignUp: !isSignUp
      };
    });
  };

  //fires when the user clicks the submit button
  const resetDropdown = () => {
    setState(prevState => {
      return {
        ...prevState,
        locationValue: "",
        selectedLocation: "",
        listOpen: false
      };
    });
    window.log(
      `dropDownReset; locationValue: ${locationValue}, selectedLocation: ${selectedLocation}, listOpen: ${listOpen}, selectedAvatar: ${selectedAvatar}`
    );
  };

  const resetAll = () => {
    setState(prevState => {
      return {
        ...prevState,
        firstNameValue: "",
        lastNameValue: "",
        usernameValue: "",
        emailValue: "",
        locationValue: "",
        passwordValue: "",
        selectedLocation: "",
        listOpen: false,
        selectedAvatar: null,
        firstNameInputIsErrored: false,
        lastNameInputIsErrored: false,
        usernameInputIsErrored: false,
        emailInputIsErrored: false,
        locationInputIsErrored: false,
        passwordInputIsErrored: false,
        avatarInputIsErrored: false
      };
    });
  };

  const locationNotFound = () => {
    const locationToCheck = locationValue;
    const result = locations.filter(
      location => location.title.toLowerCase() === locationToCheck.toLowerCase()
    );
    if (result.length === 0) {
      window.log(`No match`);
      return true;
    }
    window.log(`locationCheck: ${result}`);
    return false;
  };

  const submit = () => {
    // const newName = name
    // const newAvatar = selectedAvatar
    window.log(`Hit Submit`);
    if (inputsAreEmpty()) {
      return;
    }

    //new location should be a location object, not the input text, as the object contained in the locations constant contains more info!
    if (locationNotFound()) {
      setState(prevState => {
        return {
          ...prevState,
          locationInputIsErrored: true
        };
      });
    }

    resetAll();
    // window.log(`newName: ${newName}, newLocation: ${newLocation}, newAvatar: ${newAvatar}`)
  };

  return {
    firstNameValue,
    lastNameValue,
    usernameValue,
    emailValue,
    passwordValue,
    locationValue,
    listOpen,
    selectedLocation,
    selectedAvatar,
    firstNameInputIsErrored,
    lastNameInputIsErrored,
    usernameInputIsErrored,
    emailInputIsErrored,
    locationInputIsErrored,
    passwordInputIsErrored,
    avatarInputIsErrored,
    toggleList,
    updateFirstNameValue,
    updateLastNameValue,
    updateUsernameValue,
    updateEmailValue,
    updateLocationValue,
    updatePasswordValue,
    onLocationSelected,
    onClickAv,
    toggleSignUp,
    resetDropdown,
    isSignUp,
    resetAll,
    submit
  };
};

export default SignUpInCardAPI;
