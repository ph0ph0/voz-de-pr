import { inputsAreEmpty } from "./utils/InputsAreEmpty";
import { useUser } from "CustomHooks/user";
import { useSubject } from "CustomHooks/useSubject";
import { useHistory } from "react-router-dom";

const CreateSubjectFormAPI = ({ state, setState }) => {
  const currentPanel = state.currentPanel;
  const subjectTitle = state.subjectTitle;
  const subjectContent = state.subjectContent;
  const selectedImage = state.selectedImage;
  const subjectImage = state.subjectImage;
  const imageDescription = state.imageDescription;
  const linkDescription = state.linkDescription;
  const linkContent = state.linkContent;
  const titleIsErrored = state.titleIsErrored;
  const contentIsErrored = state.contentIsErrored;
  const linkIsErrored = state.linkIsErrored;

  const { user } = useUser();
  const { saveSubject, loading, error } = useSubject();
  let history = useHistory();

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
    const fileArray = newValue;
    //If the array length is 0, file picker was cancelled so abort setting state
    if (fileArray.length === 0) return;
    window.log(`Selected image from file, array length: ${newValue.length}`);

    setState(prevState => {
      return {
        ...prevState,
        selectedImage: URL.createObjectURL(newValue[0]),
        subjectImage: newValue[0]
      };
    });
  };

  const removeSubjectImage = () => {
    window.log(`Removing subject image...`);
    setState(prevState => {
      return {
        ...prevState,
        selectedImage: null,
        subjectImage: null
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
        selectedImage: null,
        subjectImage: null,
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
      window.log(`No user, exiting submit`);
      return;
    }

    if (inputsAreEmpty(setState, subjectTitle, subjectContent, linkContent)) {
      window.log("inputs Empty:");
      setState(prevState => {
        return {
          ...prevState,
          currentPanel: "content"
        };
      });
      if (linkIsErrored) {
        setState(prevState => {
          return {
            ...prevState,
            currentPanel: "link"
          };
        });
      }
      return;
    }

    setState(prevState => {
      return {
        ...prevState,
        isLoading: true
      };
    });

    const subjectType = secondary ? "post" : "cause";

    //Create the searchField value
    const searchField = subjectTitle
      .concat(subjectContent)
      .trim()
      .replace(/ /g, "")
      .toLowerCase();

    const staticKey = 1;

    const subjectObject = {
      createdBy: user.id,
      author: user.username,
      title: subjectTitle,
      searchField: searchField,
      staticKey: staticKey,
      subjectContent: subjectContent,
      numberOfComments: 0,
      votes: 0,
      type: subjectType
    };

    if (linkContent.trim()) {
      subjectObject.link = linkContent.trim();
    }

    try {
      await saveSubject(subjectObject, subjectImage);
    } catch (error) {
      window.log(`Error submitting subject: ${error.message}`);
      return;
    } finally {
      setState(prevState => {
        return {
          ...prevState,
          isLoading: false
        };
      });
    }

    resetAll();
    navigateToFeed(secondary);
  };

  const navigateToFeed = secondary => {
    const path = secondary ? "posts" : "causes";
    window.log(`Showing screen...`);
    history.push({
      pathname: `/${path}`
    });
  };

  return {
    currentPanel,
    showPanel,
    subjectTitle,
    subjectContent,
    selectedImage,
    subjectImage,
    imageDescription,
    linkDescription,
    linkContent,
    titleIsErrored,
    contentIsErrored,
    linkIsErrored,
    updateSubjectTitle,
    updateSubjectContent,
    updateSubjectImage,
    removeSubjectImage,
    updateImageDescription,
    updateLinkDescription,
    updateLinkContent,
    submit,
    error,
    loading
  };
};

export default CreateSubjectFormAPI;
