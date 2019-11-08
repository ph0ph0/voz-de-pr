import { locations } from '../../../../Constants/Constants'

const SignUpInCardAPI = ({state, setState}) => {
    
    const nameValue = state.nameValue
    const usernameValue = state.usernameValue
    const emailValue = state.emailValue
    const passwordValue = state.passwordValue
    const locationValue = state.locationValue
    const selectedLocation = state.selectedLocation
    const listOpen = state.listOpen
    const dropDownIsErrored = state.dropDownIsErrored
    const selectedAvatar = state.selectedAvatar
    const isSignUp = state.isSignUp

    //Fires when the user types in the name field
    const updateNameValue = (newValue) => {
        setState(prevState => {
            return ({
                ...prevState,
                nameValue: newValue
            })
        })
        window.log(`nameValue: ${newValue}`)
    }

    const updateUsernameValue = (newValue) => {
        setState(prevState => {
            return ({
                ...prevState,
                usernameValue: newValue
            })
        })
        window.log(`usernameValue: ${newValue}`)
    }

    const updateEmailValue = (newValue) => {
        setState(prevState => {
            return ({
                ...prevState,
                emailValue: newValue
            })
        })
        window.log(`emailValue: ${newValue}`)
    }

    const updatePasswordValue = (newValue) => {
        setState(prevState => {
            return ({
                ...prevState,
                passwordValue: newValue
            })
        })
        window.log(`passwordValue: ${newValue}`)
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

    const toggleSignUp = () => {
        window.log(`toggling signup`)
        setState(prevState => {
            return ({
                ...prevState,
                isSignUp: !isSignUp
            })
        })
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
        window.log(`dropDownReset; locationValue: ${locationValue}, selectedLocation: ${selectedLocation}, listOpen: ${listOpen}, selectedAvatar: ${selectedAvatar}`)
    }

    const resetAll = () => {
        setState(prevState => {
            return ({
                ...prevState,
                name: "",
                locationValue: "",
                selectedLocation: "",
                listOpen: false,
                dropDownIsErrored: false,
                selectedAvatar: null
            })
        })
    }

    const locationNotFound = () => {
        const locationToCheck = locationValue
        const result = locations.filter(location => location.title.toLowerCase() === locationToCheck.toLowerCase())
        if (result.length === 0) {
            window.log(`Got a match`)
            return true
        } 
        window.log(`locationCheck: ${result}`)
        return false
    }

    const submit = () => {
        // const newName = name
        // const newAvatar = selectedAvatar

         if (locationNotFound()) {
             setState(prevState => {
                 return ({
                    ...prevState,
                    dropDownIsErrored: true
                 })
             })
         }

         //new location should be a location object, not the input text, as the object contained in the locations constant contains more info! 

         resetAll()
        // window.log(`newName: ${newName}, newLocation: ${newLocation}, newAvatar: ${newAvatar}`)
    }

    return ({
        nameValue,
        usernameValue,
        emailValue,
        passwordValue,
        locationValue,
        listOpen,
        dropDownIsErrored,
        selectedLocation,
        selectedAvatar,
        toggleList,
        updateNameValue,
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
    })
}

export default SignUpInCardAPI