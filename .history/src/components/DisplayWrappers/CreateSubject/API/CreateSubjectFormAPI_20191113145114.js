const CreateSubjectFormAPI = ({ state, setState }) => {
  const currentPanel = state.currentPanel;
  const subjectTitle = state.subjectTitle;
  const subjectContent = state.subjectContent;
  const imageDescription = state.imageDescription;
  const linkDescription = state.linkDescription;
  const linkContent = state.linkContent;
  const titleIsErrored = state.titleIsErrored;
  const contentIsErrored = state.contentIsErrored;

  const showPanel = newValue => {
    setState(prevState => {
      return {
        ...prevState,
        currentPanel: newValue
      };
    });
  };

  const updateSubjectTitle = newValue => {
    window.log(`length: ${newValue.length}`);
    setState(prevState => {
      return {
        ...prevState,
        subjectTitle: newValue
      };
    });
    window.log(`subjectTitle: ${newValue}`);
  };

  const updateSubjectContent = newValue => {
    setState(prevState => {
      return {
        ...prevState,
        subjectContent: newValue
      };
    });
    window.log(`subjectContent: ${newValue}`);
  };

  const updateImageDescription = newValue => {
    setState(prevState => {
      return {
        ...prevState,
        imageDescription: newValue
      };
    });
    window.log(`imageDescription: ${newValue}`);
  };

  const updateLinkDescription = newValue => {
    setState(prevState => {
      return {
        ...prevState,
        linkDescription: newValue
      };
    });
    window.log(`linkDescription: ${newValue}`);
  };

  const updateLinkContent = newValue => {
    setState(prevState => {
      return {
        ...prevState,
        linkContent: newValue
      };
    });
    window.log(`linkContent: ${newValue}`);
  };

  const titleIsEmpty = () => {
    window.log(`title in bool: ${subjectTitle}`);
    return subjectTitle === "" ? true : false;
  };

  const contentIsEmpty = () => {
    window.log(`content in bool: ${subjectContent}`);
    return subjectContent === "" ? true : false;
  };

  const resetAll = () => {
    setState(prevState => {
      return {
        ...prevState,
        currentPanel: "content",
        subjectTitle: "",
        subjectContent: "",
        imageDescription: "",
        linkDescription: "",
        linkContent: "",
        titleIsErrored: false,
        contentIsErrored: false
      };
    });
  };

  const submit = () => {
    window.log(
      `On submit, subjectTitle: ${subjectTitle}, subjectContent ${subjectContent}`
    );

    if (titleIsEmpty()) {
      setState(prevState => {
        return {
          ...prevState,
          currentPanel: "content",
          titleIsErrored: true
        };
      });
      return;
    }

    if (contentIsEmpty()) {
      setState(prevState => {
        return {
          ...prevState,
          currentPanel: "content",
          contentIsErrored: true
        };
      });
      return;
    }

    resetAll();
  };

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
    submit
  };
};

export default CreateSubjectFormAPI;
