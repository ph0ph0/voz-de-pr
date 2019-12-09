import { useUser } from "../../../../../CustomHooks/user";

const SignInCardApi = ({ state, setState }) => {
  const codeValue = state.emailValue;
  const success = state.success;

  const { confirmSignUp, error, loading } = useUser();

  const updateCodeValue = newValue => {
    setState(prevState => {
      return {
        ...prevState,
        codeValue: newValue
      };
    });
    window.log(`new code value: ${newValue}`);
  };

  const submit = (email, password) => {
    try {
      await confirmSignUp(email, password, codeValue);
    } catch {
      return;
    }

    setState(prevState => {
      return {
        ...prevState,
        success: true
      };
    });
  };

  return {
    codeValue,
    updateCodeValue,
    submit,
    error,
    loading,
    success
  };
};

export default SignInCardApi;
