const CreateSubjectFormAPI = ({state, setState}) => {
    const subjectTitle = state.subjectTitle
    const subjectContent = state.subjectContent
    const imageDescription = state.imageDescription
    const linkDescription = state.linkDescription
    const linkContent = state.linkContent

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

    return {
        subjectTitle,
        subjectContent,
        imageDescription,
        linkDescription,
        linkContent,
        updateSubjectTitle,
        updateSubjectContent,
        updateImageDescription,
        updateLinkDescription,
        updateLinkContent
    }
}

export default CreateSubjectFormAPI