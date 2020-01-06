import { inputsAreEmpty } from "./utils/InputsAreEmpty";
import submitSubject from "./utils/SubmitSubject";
import { useUser } from "CustomHooks/user";

const CreateSubjectFormAPI = ({ state, setState }) => {
  const currentPanel = state.currentPanel;
  const subjectTitle = state.subjectTitle;
  const subjectContent = state.subjectContent;
  const subjectImage = state.subjectImage;
  const imageDescription = state.imageDescription;
  const linkDescription = state.linkDescription;
  const linkContent = state.linkContent;
  const titleIsErrored = state.titleIsErrored;
  const contentIsErrored = state.contentIsErrored;

  const { user } = useUser();

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

  const updateSubjectImage = newValue => {
    window.log(`Selected image from file: ${newValue}`);
    setState(prevState => {
      return {
        ...prevState,
        subjectImage: newValue
      };
    });
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

  const submit = async secondary => {
    window.log(`Submitting subject...`);
    if (!user) {
      return;
    }

    // if (inputsAreEmpty(setState, subjectTitle, subjectContent)) {
    //   return;
    // }

    setState(prevState => {
      return {
        ...prevState,
        isLoading: true
      };
    });

    const subjectType = secondary ? "post" : "cause";

    const sT = "TEST_TITLE";
    const sC = "TEST_CONTENT";

    const subjectObject = {
      createdBy: user.id,
      author: user.username,
      title: sT,
      subjectContent: sC,
      numberOfComments: 0,
      votes: 0,
      type: subjectType
    };

    try {
      await submitSubject(subjectObject);
    } catch (error) {
      window.log(`Error submitting subject: ${JSON.stringify(error)}`);
    } finally {
      setState(prevState => {
        return {
          ...prevState,
          isLoading: false
        };
      });
    }

    resetAll();
  };

  return {
    currentPanel,
    showPanel,
    subjectTitle,
    subjectContent,
    subjectImage,
    imageDescription,
    linkDescription,
    linkContent,
    titleIsErrored,
    contentIsErrored,
    updateSubjectTitle,
    updateSubjectContent,
    updateSubjectImage,
    updateImageDescription,
    updateLinkDescription,
    updateLinkContent,
    submit
  };
};

export default CreateSubjectFormAPI;
