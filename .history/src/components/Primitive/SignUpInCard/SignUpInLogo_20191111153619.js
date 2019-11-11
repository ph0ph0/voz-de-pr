import styled from "styled-components";

import { ReactComponent as LogoSVG } from "../../../assets/SignUpInCard/SignUpInLogo.svg";

const Logo = styled(LogoSVG)`
  /* border: 1px solid salmon; */

  margin-top: 39px;
  margin-bottom: ${props => (props.isSignUp ? "32px" : "111px")};
  margin-left: auto;
`;

export default Logo;
