import { useUser } from "../../../../../CustomHooks/user";

const SignInCardApi = ({ state, setState }) => {
  const codeValue = state.emailValue;

  const { confirmSignUp, error, loading } = useUser();

  const updateCodeValue = newValue => {
    setState(prevState => {
      return {
        ...prevState,
        codeValue: newValue
      };
    });
    window.log(`new email value: ${newValue}`);
  };

  const submit = () => {
    window.log(`submitted, email: ${emailValue}, pw: ${passwordValue}`);

    confirmSignUp();
  };

  return {
    codeValue,
    updateCodeValue,
    submit,
    error,
    loading
  };
};

export default SignInCardApi;
