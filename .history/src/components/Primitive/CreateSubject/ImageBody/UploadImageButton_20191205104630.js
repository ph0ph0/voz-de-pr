import styled from "styled-components";

const UploadImageButton = styled.button`
  border: ${props =>
    props.secondary ? "2px solid #1B4EA0" : "2px solid #EC220D"};
  border-radius: 5px;

  width: 153px;
  height: 49px;

  background-color: yellow;

  font-size: 20px;
  color: ${props => (props.secondary ? "#1B4EA0" : "#EC220D")};
`;

export default UploadImageButton;
