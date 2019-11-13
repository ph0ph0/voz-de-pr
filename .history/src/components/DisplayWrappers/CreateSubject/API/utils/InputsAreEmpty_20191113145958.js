export const InputsAreEmpty = (setState, subjectTitle, subjectContent) => {
  setState(prevState => {
    return {
      ...prevState,
      titleIsErrored: false,
      contentIsErrored: false
    };
  });

  var flag = false;

  if (subjectTitle === "") {
    setState(prevState => {
      return {
        ...prevState,
        titleIsErrored: true
      };
    });
    flag = true;
  }
  if (subjectContent === "") {
    setState(prevState => {
      return {
        ...prevState,
        contentIsErrored: true
      };
    });
    flag = true;
  }
  return flag;
};
