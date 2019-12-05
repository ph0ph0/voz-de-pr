import PropTypes from "prop-types";

export const SidePanelProfileApiProptypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  locationValue: PropTypes.string.isRequired,
  listOpen: PropTypes.bool.isRequired,
  selectedLocation: PropTypes.string.isRequired,
  selectedAvatar: PropTypes.string,
  updateNameValue: PropTypes.func.isRequired,
  toggleList: PropTypes.func.isRequired,
  updateLocationValue: PropTypes.func.isRequired,
  onLocationSelected: PropTypes.func.isRequired,
  resetDropdown: PropTypes.func.isRequired
});
