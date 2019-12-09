import React from "react";
import styled from "styled-components";

const ConfirmSignUpCardWrapper = ({ ...props }) => {
  return (
    <div {...props}>
      <SidePanel />
      <ConfirmSignUpCardBody />
    </div>
  );
};

const ConfirmSignUpCard = styled(ConfirmSignUpCardWrapper)``;

export default ConfirmSignUpCard;
