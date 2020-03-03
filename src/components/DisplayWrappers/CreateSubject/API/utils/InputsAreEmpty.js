export const inputsAreEmpty = (
  setState,
  subjectTitle,
  subjectContent,
  linkContent
) => {
  setState(prevState => {
    return {
      ...prevState,
      titleIsErrored: false,
      contentIsErrored: false
    };
  });

  var flag = false;

  if (subjectTitle.trim() === "") {
    setState(prevState => {
      return {
        ...prevState,
        titleIsErrored: true
      };
    });
    flag = true;
  }
  if (subjectContent.trim() === "") {
    setState(prevState => {
      return {
        ...prevState,
        contentIsErrored: true
      };
    });
    flag = true;
  }
  const trimmedLink = linkContent.trim();
  //Check that link starts with at least http.
  if (trimmedLink !== "" && !trimmedLink.startsWith("http")) {
    setState(prevState => {
      return {
        ...prevState,
        linkIsErrored: true
      };
    });
    flag = true;
  }

  return flag;
};
