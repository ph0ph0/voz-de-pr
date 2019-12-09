import { useUser } from "../../../../../CustomHooks/user";

const ForgotPasswordApi = ({ state, setState }) => {
  const emailValue = state.emailValue;
  const codeValue = state.codeValue;
  const firstPasswordValue = state.firstPasswordValue;
  const secondPasswordValue = state.secondPasswordValue;
  const content = state.content;

  const { error, loading } = useUser();

  const updateEmailValue = newValue => {
    setState(prevState => {
      return {
        ...prevState,
        emailValue: newValue
      };
    });
    window.log(`new email value: ${newValue}`);
  };

  const updateFirstPasswordValue = newValue => {
    setState(prevState => {
      return {
        ...prevState,
        firstPasswordValue: newValue
      };
    });
    window.log(`new passwordValue: ${newValue}`);
  };

  const updateSecondPasswordValue = newValue => {
    setState(prevState => {
      return {
        ...prevState,
        secondPasswordValue: newValue
      };
    });
    window.log(`new passwordValue: ${newValue}`);
  };

  const updateCodeValue = newValue => {
    setState(prevState => {
      return {
        ...prevState,
        secondPasswordValue: newValue
      };
    });
    window.log(`new passwordValue: ${newValue}`);
  };

  const resetAll = () => {
    setState(prevState => {
      return {
        ...prevState,
        emailValue: "",
        firstPasswordValue: "",
        secondPasswordValue: "",
        codeValue: ""
      };
    });
  };

  const submit = () => {
    switch (content) {
      case "email":
        //Send off email code
        setState(prevState => {
          return {
            ...prevState,
            content: "code"
          };
        });
        break;
      case "code":
        //Check code
        setState(prevState => {
          return {
            ...prevState,
            content: "success"
          };
        });
        break;
      default:
        setState(prevState => {
          return {
            ...prevState,
            content: "email"
          };
        });
    }

    resetAll();
  };

  return {
    emailValue,
    updateEmailValue,
    firstPasswordValue,
    secondPasswordValue,
    updateFirstPasswordValue,
    updateSecondPasswordValue,
    codeValue,
    updateCodeValue,
    submit,
    error,
    loading
  };
};

export default ForgotPasswordApi;
