const CreateSubjectFormAPI = ({state, setState}) => {
    const currentPanel = state.currentPanel
    const subjectTitle = state.subjectTitle
    const subjectContent = state.subjectContent
    const imageDescription = state.imageDescription
    const linkDescription = state.linkDescription
    const linkContent = state.linkContent
    const titleIsErrored = state.titleIsErrored
    const contentIsErrored = state.contentIsErrored

    const showPanel = (newValue) => {
        setState(prevState => {
            return ({
                ...prevState,
                currentPanel: newValue
            })
        })
    }

    const updateSubjectTitle = (newValue) => {
        setState(prevState => {
            return ({
                ...prevState,
                subjectTitle: newValue
            })
        })
        window.log(`subjectTitle: ${newValue}`)
    }

    const updateSubjectContent= (newValue) => {
        setState(prevState => {
            return ({
                ...prevState,
                subjectContent: newValue
            })
        })
        window.log(`subjectContent: ${newValue}`)
    }

    const updateImageDescription = (newValue) => {
        setState(prevState => {
            return ({
                ...prevState,
                imageDescription: newValue
            })
        })
        window.log(`imageDescription: ${newValue}`)
    }

    const updateLinkDescription = (newValue) => {
        setState(prevState => {
            return ({
                ...prevState,
                linkDescription: newValue 
            })
        })
        window.log(`linkDescription: ${newValue}`)
    }

    const updateLinkContent = (newValue) => {
        setState(prevState => {
            return ({
                ...prevState,
                linkContent: newValue
            })
        })
        window.log(`linkContent: ${newValue}`)
    }

    const titleIsEmpty = () => {
        if (subjectTitle === "") {
            return true
        }
        return false
    }

    const contentIsEmpty = () => {
        if (subjectContent === "") {
            return true
        }
        return false
    }

    const resetAll = () => {
        setState(prevState => {
            return ({
                ...prevState,
                currentPanel: "content",
                subjectTitle: "",
                subjectContent: "",
                imageDescription: "",
                linkDescription: "",
                linkContent: ""
            })
        })
    }

    const submit = () => {

        if (titleIsEmpty) {
            setState(prevState => {
                return ({
                    ...prevState,
                    currentPanel: "content",
                    titleIsErrored: true
                })
            })
        }

        if (contentIsEmpty) {
            setState(prevState => {
                return ({
                    ...prevState,
                    currentPanel: "content",
                    contentIsErrored: true
                })
            })
        }

        resetAll()
    }

    return {
        currentPanel,
        showPanel,
        subjectTitle,
        subjectContent,
        imageDescription,
        linkDescription,
        linkContent,
        titleIsErrored,
        contentIsErrored,
        updateSubjectTitle,
        updateSubjectContent,
        updateImageDescription,
        updateLinkDescription,
        updateLinkContent,
        submit,
    }
}

export default CreateSubjectFormAPI