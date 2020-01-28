import { useUser } from "../../../../../CustomHooks/user";

const SignInCardApi = ({ state, setState }) => {
  const codeValue = state.codeValue;
  const success = state.success;
  const loading = state.loading;

  const { confirmSignUp, error } = useUser();

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
    if (loading) return;
    setState(prevState => {
      return {
        ...prevState,
        loading: true
      };
    });
    try {
      await confirmSignUp(email, password, codeValue, avatar);
    } catch (error) {
      window.log(`Error confirming signup: ${error}`);
      return;
    } finally {
      setState(prevState => {
        return {
          ...prevState,
          loading: false
        };
      });
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
