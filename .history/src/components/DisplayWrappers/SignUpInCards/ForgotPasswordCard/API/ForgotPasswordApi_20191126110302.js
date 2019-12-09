import { useUser } from "../../../../../CustomHooks/user";

const ForgotPasswordApi = ({ state, setState }) => {
  const emailValue = state.emailValue;
  const codeValue = state.codeValue;
  const firstPasswordValue = state.firstPasswordValue;
  const secondPasswordValue = state.secondPasswordValue;
  const content = state.content;
  const passwordsMatch = state.passwordsMatch;

  const {
    error,
    loading,
    forgotPassword,
    submitCodeAndNewPassword
  } = useUser();

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
        firstPasswordValue: newValue,
        passwordsMatch: passwordsAreSame(newValue, secondPasswordValue)
      };
    });
    window.log(`new passwordValue: ${newValue}`);
  };

  const updateSecondPasswordValue = newValue => {
    setState(prevState => {
      return {
        ...prevState,
        secondPasswordValue: newValue,
        passwordsMatch: passwordsAreSame(newValue, firstPasswordValue)
      };
    });
    window.log(`new passwordValue: ${newValue}`);
  };

  const updateCodeValue = newValue => {
    setState(prevState => {
      return {
        ...prevState,
        codeValue: newValue
      };
    });
    window.log(`new passwordValue: ${newValue}`);
  };

  //Checks that the newly entered password matches the email. Used to set passwordsMatch bool in updatePasswordValue
  const passwordsAreSame = (newValue, otherValue) => {
    return newValue === otherValue;
  };

  const resetAll = () => {
    setState(prevState => {
      return {
        ...prevState,
        emailValue: "",
        firstPasswordValue: "",
        secondPasswordValue: "",
        codeValue: "",
        passwordsMatch: null
      };
    });
  };

  const submit = async () => {
    window.log(`Switching content, currently: ${content}`);
    // setState(prevState => {
    //   return {
    //     ...prevState,
    //     content: "code"
    //   };
    // });
    switch (content) {
      case "email":
        try {
          await forgotPassword(emailValue);
        } catch {
          return;
        }
        setState(prevState => {
          return {
            ...prevState,
            content: "code"
          };
        });
        // await forgotPassword(emailValue)
        //   .then(() => {
        //     setState(prevState => {
        //       return {
        //         ...prevState,
        //         content: "code"
        //       };
        //     });
        //     window.log(`content is now: ${content}`);
        //   })
        //   .catch(() => {
        //     return;
        //   });
        break;
      case "code":
        window.log(`Current emailValue: ${emailValue}`);
        if (!passwordsMatch) return;

        await submitCodeAndNewPassword(
          emailValue,
          codeValue,
          secondPasswordValue
        )
          .then(() => {
            setState(prevState => {
              return {
                ...prevState,
                content: "success"
              };
            });
            window.log(`content is now: ${content}`);
          })
          .catch(() => {
            return;
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
  };

  return {
    emailValue,
    updateEmailValue,
    firstPasswordValue,
    secondPasswordValue,
    updateFirstPasswordValue,
    updateSecondPasswordValue,
    codeValue,
    passwordsMatch,
    updateCodeValue,
    content,
    submit,
    error,
    loading
  };
};

export default ForgotPasswordApi;
