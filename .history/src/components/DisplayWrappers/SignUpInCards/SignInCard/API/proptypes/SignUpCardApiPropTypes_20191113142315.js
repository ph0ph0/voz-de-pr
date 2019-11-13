import PropTypes from "prop-types";

export const SignUpCardApiPropTypes = {
  emailvalue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  emailIsErrored: PropTypes.bool.isRequired,
  passwordIsErrored: PropTypes.bool.isRequired,
  updateEmailValue: PropTypes.func.isRequired,
  updatePasswordValue: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
};
