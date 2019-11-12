import PropTypes from "prop-types";

export const SignUpInCardApiPropTypes = PropTypes.shape({
  firstNameValue: PropTypes.string.isRequired,
  lastNameValue: PropTypes.string.isRequired,
  usernameValue: PropTypes.string.isRequired,
  firstEmailValue: PropTypes.string.isRequired,
  secondEmailValue: PropTypes.string.isRequired,
  firstPasswordValue: PropTypes.string.isRequired,
  secondPasswordValue: PropTypes.string.isRequired,
  locationValue: PropTypes.string.isRequired,
  listOpen: PropTypes.bool.isRequired,
  selectedLocation: PropTypes.object,
  selectedAvatar: PropTypes.string,
  firstNameInputIsErrored: PropTypes.bool.isRequired,
  lastNameInputIsErrored: PropTypes.bool.isRequired,
  usernameInputIsErrored: PropTypes.bool.isRequired,
  emailInputIsErrored: PropTypes.bool.isRequired,
  locationInputIsErrored: PropTypes.bool.isRequired,
  passwordInputIsErrored: PropTypes.bool.isRequired,
  avatarInputIsErrored: PropTypes.bool.isRequired,
  emailsMatch: PropTypes.bool,
  passwordsMatch: PropTypes.bool,
  toggleList: PropTypes.func.isRequired,
  updateFirstNameValue: PropTypes.func.isRequired,
  updateLastNameValue: PropTypes.func.isRequired,
  updateUsernameValue: PropTypes.func.isRequired,
  updateFirstEmailValue: PropTypes.func.isRequired,
  updateSecondEmailValue: PropTypes.func.isRequired,
  updateLocationValue: PropTypes.func.isRequired,
  updateFirstPasswordValue: PropTypes.func.isRequired,
  updateSecondPasswordValue: PropTypes.func.isRequired,
  onLocationSelected: PropTypes.func.isRequired,
  onClickAv: PropTypes.func.isRequired,
  toggleSignUp: PropTypes.func.isRequired,
  resetDropdown: PropTypes.func.isRequired,
  isSignUp: PropTypes.func.isRequired,
  resetAll: PropTypes.func.isRequired,
  locationNotFound: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
});
