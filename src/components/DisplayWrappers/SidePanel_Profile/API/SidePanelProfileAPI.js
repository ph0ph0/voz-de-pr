import { locations } from "Constants/Constants";
import { useUser } from "CustomHooks/user";

const SidePanelProfileAPI = ({ state, setState }) => {
  const locationValue = state.locationValue;
  const selectedLocation = state.selectedLocation;
  const listOpen = state.listOpen;
  const dropDownIsErrored = state.dropDownIsErrored;
  const selectedAvatar = state.selectedAvatar;
  const avatar = state.avatar;

  const { updateUserLocationAndAvatar, error, loading } = useUser();

  //Fires when the user clicks on the Inline Content wrapper. Opens the drop down and displays the locations
  const toggleList = () => {
    const newValue = !listOpen;
    setState(prevState => {
      return {
        ...prevState,
        dropDownIsErrored: false,
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

  const resetAll = () => {
    setState(prevState => {
      return {
        ...prevState,
        locationValue: "",
        selectedLocation: "",
        listOpen: false,
        dropDownIsErrored: false,
        selectedAvatar: null,
        avatar: null
      };
    });
  };

  const locationNotFound = () => {
    const locationToCheck = locationValue;
    const result = locations.filter(
      location => location.title.toLowerCase() === locationToCheck.toLowerCase()
    );
    if (result.length === 0) {
      window.log("Location not found");
      return true;
    }
    window.log(`locationCheck: ${result}`);
    return false;
  };

  const submit = async () => {
    // const newAvatar = selectedAvatar

    if (locationNotFound()) {
      setState(prevState => {
        return {
          ...prevState,
          locationValue: "",
          dropDownIsErrored: true
        };
      });
      return;
    }

    //Object.assign will skip over null values, allowing us to only update inputs if not empty
    let data = Object.assign(
      {},
      locationValue === "" ? null : { location: locationValue }
    );

    try {
      await updateUserLocationAndAvatar(data, avatar);

      //Show success info
    } catch (error) {
      //Show error
      window.log(`ERROR updating user!: ${error}`);
    }

    resetAll();
    // window.log(`newLocation: ${newLocation}, newAvatar: ${newAvatar}`)
  };

  return {
    locationValue,
    listOpen,
    dropDownIsErrored,
    selectedLocation,
    selectedAvatar,
    avatar,
    toggleList,
    updateLocationValue,
    onLocationSelected,
    updateAvatar,
    resetDropdown,
    resetAll,
    submit,
    error,
    loading
  };
};

export default SidePanelProfileAPI;
