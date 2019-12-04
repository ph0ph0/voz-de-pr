import styled from "styled-components";
import PropTypes from "prop-types";

import SubjectImage from "../../SubjectCard/SubjectImage";

const DetailImage = styled(SubjectImage)`
    max-width: 670px;
    max-height: 460px;
`;

DetailImage.propTypes = {
  src: PropTypes.string.isRequired
};

export default DetailImage;