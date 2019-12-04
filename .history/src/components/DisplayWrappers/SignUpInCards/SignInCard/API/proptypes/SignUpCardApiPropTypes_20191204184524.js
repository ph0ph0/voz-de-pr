import PropTypes from "prop-types";

export const SignUpCardApiPropTypes = PropTypes.shape({
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  emailInputIsErrored: PropTypes.bool.isRequired,
  passwordInputIsErrored: PropTypes.bool.isRequired,
  updateEmailValue: PropTypes.func.isRequired,
  updatePasswordValue: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
});

export default SignUpCardApiPropTypes;
