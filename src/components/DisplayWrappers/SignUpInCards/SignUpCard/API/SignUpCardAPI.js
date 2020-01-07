import { locations } from "Constants/Constants";
import { inputsAreEmpty } from "./utils/InputsAreEmpty";

import { useUser } from "CustomHooks/user";

const SignUpCardAPI = ({ state, setState }) => {
  const firstNameValue = state.firstNameValue;
  const lastNameValue = state.lastNameValue;
  const usernameValue = state.usernameValue;
  const firstEmailValue = state.firstEmailValue;
  const secondEmailValue = state.secondEmailValue;
  const firstPasswordValue = state.firstPasswordValue;
  const secondPasswordValue = state.secondPasswordValue;
  const locationValue = state.locationValue;
  const selectedLocation = state.selectedLocation;
  const listOpen = state.listOpen;
  const selectedAvatar = state.selectedAvatar;
  const avatar = state.avatar;
  const emailsMatch = state.emailsMatch;
  const passwordsMatch = state.passwordsMatch;
  const firstNameInputIsErrored = state.firstNameInputIsErrored;
  const lastNameInputIsErrored = state.lastNameInputIsErrored;
  const usernameInputIsErrored = state.usernameInputIsErrored;
  const emailInputIsErrored = state.emailInputIsErrored;
  const locationInputIsErrored = state.locationInputIsErrored;
  const passwordInputIsErrored = state.passwordInputIsErrored;
  const avatarInputIsErrored = state.avatarInputIsErrored;
  const success = state.success;

  const { signUp, error, loading } = useUser();

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

  const updateFirstEmailValue = newValue => {
    setState(prevState => {
      return {
        ...prevState,
        firstEmailValue: newValue,
        emailsMatch: emailsAreSame(newValue, secondEmailValue)
      };
    });
    window.log(`emailValue: ${newValue}`);
  };

  const updateSecondEmailValue = newValue => {
    setState(prevState => {
      return {
        ...prevState,
        secondEmailValue: newValue,
        emailsMatch: emailsAreSame(newValue, firstEmailValue)
      };
    });
    window.log(`emailValue: ${newValue}`);
  };

  const updateFirstPasswordValue = newValue => {
    setState(prevState => {
      return {
        ...prevState,
        firstPasswordValue: newValue,
        passwordsMatch: passwordsAreSame(newValue, secondPasswordValue)
      };
    });
    window.log(`passwordValue: ${newValue}`);
  };

  const updateSecondPasswordValue = newValue => {
    setState(prevState => {
      return {
        ...prevState,
        secondPasswordValue: newValue,
        passwordsMatch: passwordsAreSame(newValue, firstPasswordValue)
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

  const updateAvatar = newValue => {
    const fileArray = newValue;
    //If the array length is 0, the file picker was cancelled so abort setting the state
    if (fileArray.length === 0) return;
    window.log("Selected a profile image");
    setState(prevState => {
      return {
        ...prevState,
        selectedAvatar: URL.createObjectURL(newValue[0]),
        avatar: newValue[0]
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

  //Checks that the newly entered email matches the other email. Used to set emailsMatch bool in updateSecondEmail
  const emailsAreSame = (newValue, otherValue) => {
    return newValue === otherValue;
  };

  //Checks that the newly entered password matches the email. Used to set passwordsMatch bool in updatePasswordValue
  const passwordsAreSame = (newValue, otherValue) => {
    return newValue === otherValue;
  };

  const resetAll = () => {
    setState(prevState => {
      return {
        ...prevState,
        firstNameValue: "",
        lastNameValue: "",
        usernameValue: "",
        firstEmailValue: "",
        secondEmailValue: "",
        locationValue: "",
        firstPasswordValue: "",
        secondPasswordValue: "",
        selectedLocation: null,
        emailsMatch: null,
        passwordsMatch: null,
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
      window.log("No location match");
      return true;
    }
    window.log(`locationCheck: ${result}`);
    return false;
  };

  const getLocationObject = locationTitle => {
    return locations.find(location => location.title === locationTitle);
  };

  const submit = async () => {
    window.log("Submitting for signup...");

    if (
      inputsAreEmpty(
        setState,
        firstNameValue,
        lastNameValue,
        usernameValue,
        firstEmailValue,
        locationValue,
        firstPasswordValue,
        selectedAvatar
      ) ||
      !emailsMatch ||
      !passwordsMatch
    ) {
      window.log("INPUTS WERE EMPTY OR EMAILS/PW DIDNT MATCH");
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
      return;
    }

    const locationObject = getLocationObject(selectedLocation);
    if (!locationObject) {
      window.log(`NO LOCATION OBJECT: ${locationObject}`);
      return;
    } else {
      window.log(`Found Location Object: ${JSON.stringify(locationObject)}`);
    }

    try {
      await signUp(
        secondEmailValue,
        secondPasswordValue,
        usernameValue,
        firstNameValue,
        lastNameValue,
        selectedLocation
      );
    } catch (error) {
      window.log(`Error caught in SignUpCardAPI: ${JSON.stringify(error)}`);
      return;
    }

    setState(prevState => {
      return {
        ...prevState,
        success: true
      };
    });

    resetAll();
  };

  return {
    firstNameValue,
    lastNameValue,
    usernameValue,
    firstEmailValue,
    secondEmailValue,
    firstPasswordValue,
    secondPasswordValue,
    locationValue,
    listOpen,
    selectedLocation,
    selectedAvatar,
    avatar,
    firstNameInputIsErrored,
    lastNameInputIsErrored,
    usernameInputIsErrored,
    emailInputIsErrored,
    locationInputIsErrored,
    passwordInputIsErrored,
    avatarInputIsErrored,
    toggleList,
    emailsMatch,
    passwordsMatch,
    updateFirstNameValue,
    updateLastNameValue,
    updateUsernameValue,
    updateFirstEmailValue,
    updateSecondEmailValue,
    updateLocationValue,
    updateFirstPasswordValue,
    updateSecondPasswordValue,
    onLocationSelected,
    updateAvatar,
    resetDropdown,
    resetAll,
    locationNotFound,
    getLocationObject,
    submit,
    loading,
    error,
    success
  };
};

export default SignUpCardAPI;
