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

  const submit = async (email, password) => {
    const code = parseInt(codeValue);
    try {
      await confirmSignUp(email, password, code);
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
