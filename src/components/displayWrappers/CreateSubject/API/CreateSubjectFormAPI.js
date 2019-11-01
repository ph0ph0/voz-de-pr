const CreateSubjectFormAPI = ({state, setState}) => {
    const subjectTitle = state.subjectDescription
    const subjectContent = state.subjectContent
    const imageDescription = state.imageDescription
    const linkContent = state.linkContent

    const updateSubjectTitle = (event) => {
        setState(event.target.value)
        window.log(`subjectTitle: ${subjectTitle}`)
    }

    const updateSubjectContent= (event) => {
        setState(event.target.value)
        window.log(`subjectContent: ${subjectContent}`)
    }

    const updateImageDescription = (event) => {
        setState(event.target.value)
    }

    const updateLinkContent = (event) => {
        setState(event.target.value)
    }

    return {
        subjectTitle,
        subjectContent,
        imageDescription,
        linkContent,
        updateSubjectTitle,
        updateSubjectContent,
        updateImageDescription,
        updateLinkContent
    }
}

export default CreateSubjectFormAPI