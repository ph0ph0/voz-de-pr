const SidePanelProfileAPI = ({state, setState}) => {
    const name = state.name
    const locationValue = state.locationValue
    const selectedLocation = state.selectedLocation
    const listOpen = state.listOpen
    const selectedAvatar = state.selectedAvatar

    //Called when the user types into the NameInput component
    const updateNameValue = (newValue ) => {
        setState(prevState => {
            return ({
                ...prevState,
                name: newValue
            })
        })
        window.log(`nameValue: ${newValue}`)
    }

    //Fires when the user clicks on the Inline Content wrapper. Opens the drop down and displays the locations
    const toggleList = () => {
        const newValue = !listOpen
        setState(prevState => {
            return ({
                ...prevState,
                listOpen: newValue
            })
        })
        window.log(`listOpen: ${newValue}`)
    }

    ////Called when the user types into the LocationInput component
    const updateLocationValue = (newValue) => {
        setState(prevState => {
            return ({
                ...prevState,
                locationValue: newValue
            })
        })
        window.log(`locationValue: ${newValue}`)
    }

    // Fires when a location from the dropdown is clicked, set it as the locationValue and the selected location value
    const onLocationSelected = (newValue) => {
        setState(prevState => {
            return ({
                ...prevState,
                listOpen: false,
                locationValue: newValue,
                selectedLocation: newValue
            })
        })
        window.log(`locationSelected: ${newValue}`)
    }

    const onClickAv = (key) => {
        const selectedKey = key;
        setState(prevState => {
            return ({
                ...prevState,
                selectedAvatar: selectedKey
            })
        })
        window.log(`avatar selected: ${selectedKey}`)
    }

    //fires when the user clicks the submit button
    const resetDropdown = () => {
        setState((prevState) => {
            return ({
                ...prevState,
                locationValue: "",
                selectedLocation: "",
                listOpen: false,
            })
        })
        window.log(`dropDownReset; name: ${name}, locationValue: ${locationValue}, selectedLocation: ${selectedLocation}, listOpen: ${listOpen}, selectedAvater: ${selectedAvatar}`)
    }

    const resetAll = () => {
        setState(prevState => {
            return ({
                ...prevState,
                name: "",
                locationValue: "",
                selectedLocation: "",
                listOpen: false,
                selectedAvatar: null
            })
        })
    }

    const submit = () => {
        const newName = name
        const newLocation = selectedLocation
        const newAvatar = selectedAvatar
        resetAll()

        window.log(`newName: ${newName}, newLocation: ${newLocation}, newAvatar: ${newAvatar}`)
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
        onClickAv,
        resetDropdown,
        submit
    })
}

export default SidePanelProfileAPI