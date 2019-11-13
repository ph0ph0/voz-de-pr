import { inputsAreEmpty } from "./utils/InputsAreEmpty";

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
        passwordValue: newValue
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
    if (inputsAreEmpty(setState, emailValue, passwordValue)) {
      return;
    }
  };

  return {
    emailValue,
    passwordValue,
    updateEmailValue,
    updatePasswordValue,
    emailInputIsErrored,
    passwordInputIsErrored,
    submit
  };
};

export default SignInCardApi;
