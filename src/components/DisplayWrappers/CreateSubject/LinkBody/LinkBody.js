import React from "react";
import styled from "styled-components";

import LinkDescription from "../../../Primitive/CreateSubject/LinkBody/LinkDescription";
import LinkTextArea from "../../../Primitive/CreateSubject/LinkBody/LinkTextArea";
import Error from "components/Primitive/General/ErrorText";

const LinkBodyWrapper = ({ secondary, api, ...props }) => {
  return (
    <div {...props}>
      <LinkDescription api={api} />
      {api.linkIsErrored && (
        <ErrorText>
          Please include the entire url address (including http:// or https://)
        </ErrorText>
      )}
      <LinkTextArea secondary={secondary} api={api} />
    </div>
  );
};

const ErrorText = styled(Error)`
  margin-left: auto;
`;

const LinkBody = styled(LinkBodyWrapper)`
  /* border: 1px solid green; */

  /* 87% is roughly 650px wide */
  width: 87%;
  height: auto;

  margin-top: 33px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export default LinkBody;
