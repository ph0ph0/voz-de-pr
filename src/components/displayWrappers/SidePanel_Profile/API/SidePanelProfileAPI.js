const SidePanelProfileAPI = ({state, setState}) => {
    const name = state.name
    const locationValue = state.locationValue
    const selectedLocation = state.selectedLocation
    const listOpen = state.listOpen
    const selectedAvatar = state.selectedAvatar

    //Called when the user types into the NameInput component
    const updateNameValue = () => {

    }

    //Fires when the user clicks on the Inline Content wrapper. Opens the drop down and displays the locations
    const toggleList = () => {

    }

    ////Called when the user types into the LocationInput component
    const updateLocationValue = () => {

    }

    // Fires when a location from the dropdown is clicked
    const onLocationSelected = () => {

    }

    //fires when the user clicks the submit button
    const resetDropdown = () => {

    }

    return ({
        name,
        locationValue,
        listOpen,
        selectedLocation,
        selectedAvatar,
        updateNameValue,
        toggleList,
        updateLocationValue,
        onLocationSelected,
        resetDropdown
    })
}