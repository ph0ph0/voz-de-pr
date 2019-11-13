import { inputsAreEmpty } from "./utils/inputsAreEmpty";

const SignInCardApi = ({ state, setState }) => {
  const emailValue = state.emailValue;
  const passwordValue = state.passwordValue;
  const emailInputIsErrored = state.emailInputIsErrored;
  const passwordInputIsErrored = state.passwordInputIsErrored;

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

  const resetAll = () => {
    setState(prevState => {
      return {
        ...prevState,
        emailValue: "",
        passwordValue: "",
        emailInputIsErrored: false,
        passwordInputIsErrored: false
      };
    });
  };

  const submit = () => {
    if (
      inputsAreEmpty(
        emailValue,
        passwordValue,
        emailInputIsErrored,
        passwordInputIsErrored,
        setState
      )
    ) {
      return;
    }
  };

  return (
    emailValue, passwordValue, updateEmailValue, updatePasswordValue, submit
  );
};

export default SignInCardApi;
