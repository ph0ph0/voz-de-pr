const SignInCardApi = ({ state, setState }) => {
  const emailValue = state.emailValue;
  const passwordValue = state.passwordValue;

  const updateEmailValue = newValue => {
    setState(prevState => {
      return {
        ...prevState,
        emailValue: newValue
      };
    });
  };

  const updatePasswordValue = newValue => {
    setState(prevState => {
      return {
        ...prevState,
        emailValue: newValue
      };
    });
  };
};

export default SignInCardApi;
