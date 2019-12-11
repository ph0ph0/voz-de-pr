import { inputsAreEmpty } from "./utils/InputsAreEmpty";
const CreateSubjectFormAPI = ({ state, setState }) => {
  const currentPanel = state.currentPanel;
  const subjectTitle = state.subjectTitle;
  const subjectContent = state.subjectContent;
  const imageDescription = state.imageDescription;
  const linkDescription = state.linkDescription;
  const linkContent = state.linkContent;
  const titleIsErrored = state.titleIsErrored;
  const contentIsErrored = state.contentIsErrored;
  const isLoading = state.isLoading;

  const showPanel = newValue => {
    setState(prevState => {
      return {
        ...prevState,
        currentPanel: newValue
      };
    });
  };

  const updateSubjectTitle = newValue => {
    //We dont want the title being too long!
    window.log(`titleLength: ${newValue.length}`);
    if (newValue.length > 50) return;
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
        contentIsErrored: false,
        isLoading: false
      };
    });
  };

  const submit = () => {
    setState();
    window.log(
      `On submit, subjectTitle: ${subjectTitle}, subjectContent ${subjectContent}`
    );

    if (inputsAreEmpty(setState, subjectTitle, subjectContent)) {
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
