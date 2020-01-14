import styled from "styled-components";

const SubjectImage = styled.img`
  /* Note that image should be jpg, png wouldnt work for some reason.
    By setting the width to 100% */
  /* border: 1px solid bisque; */
  /* background-color: red; */
  object-fit: cover;
  max-width: 175px;
  max-height: 123px;
  width: 100%;
  height: auto;

  border-radius: 5px;

  :before {
    content: url("assets/General/placeholder.gif");
    display: block;
  }
  :after {
    content: url("assets/General/placeholder.gif");
    display: block;
  }
`;

export default SubjectImage;
