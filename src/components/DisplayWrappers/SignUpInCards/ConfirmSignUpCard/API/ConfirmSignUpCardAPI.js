import { useUser } from "../../../../../CustomHooks/user";

const SignInCardApi = ({ state, setState }) => {
  const codeValue = state.codeValue;
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

  const submit = async (email, password, avatar) => {
    window.log(`codeValue in API: ${codeValue}`);
    try {
      await confirmSignUp(email, password, codeValue, avatar);
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
