import { inputsAreEmpty } from "./utils/InputsAreEmpty";
import { useUser } from "../../../../../CustomHooks/user";

const SignInCardApi = ({ state, setState }) => {
  const emailValue = state.emailValue;
  const passwordValue = state.passwordValue;
  const emailInputIsErrored = state.emailInputIsErrored;
  const passwordInputIsErrored = state.passwordInputIsErrored;
  const success = state.success;

  const { login, error, loading } = useUser();

  const updateEmailValue = newValue => {
    setState(prevState => {
      return {
        ...prevState,
        emailValue: newValue
      };
    });
    window.log(`new email value: ${newValue}`);
  };

  const updatePasswordValue = newValue => {
    setState(prevState => {
      return {
        ...prevState,
        passwordValue: newValue
      };
    });
    window.log(`new passwordValue: ${newValue}`);
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

  const submit = async () => {
    if (inputsAreEmpty(setState, emailValue, passwordValue)) {
      return;
    }

    window.log(`submitted, email: ${emailValue}, pw: ${passwordValue}`);

    try {
      await login(emailValue, passwordValue);
    } catch {
      return;
    }

    setState(prevState => {
      return {
        ...prevState,
        success: true
      };
    });

    // resetAll();
  };

  return {
    emailValue,
    passwordValue,
    updateEmailValue,
    updatePasswordValue,
    emailInputIsErrored,
    passwordInputIsErrored,
    submit,
    error,
    loading,
    success
  };
};

export default SignInCardApi;
