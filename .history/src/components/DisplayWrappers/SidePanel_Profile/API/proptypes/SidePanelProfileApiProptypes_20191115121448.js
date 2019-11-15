import PropTypes from "prop-types";

export const SidePanelProfileApiProptypes = PropTypes.shape({
  name: "",
  locationValue: "",
  listOpen: false,
  selectedLocation: "",
  selectedAvatar: "",
  updateNameValue: () => {},
  toggleList: () => {},
  updateLocationValue: () => {},
  onLocationSelected: () => {},
  resetDropdown: () => {}
});
