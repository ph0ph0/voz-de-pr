import React from "react";
import styled from "styled-components";
import { useLanguage } from "CustomHooks/useLanguage";

const displayText = {
  en: {
    location: "Location"
  },
  sp: {
    location: "Localización"
  }
};

const InputWrapper = ({ api, ...props }) => {
  const { language } = useLanguage();

  return (
    <input
      placeholder={
        language === "spanish"
          ? displayText.sp.location
          : displayText.en.location
      }
      value={api.locationValue}
      onChange={event => api.updateLocationValue(event.target.value)}
      {...props}
    />
  );
};

const Input = styled(InputWrapper)`
  border: none;
  /* border: 1px solid red; */
  /* Still need to add a radius to the border as otherwise it cuts off the parent radius */
  border-radius: 5px;
  width: 150px;
  height: 37px;

  padding-left: 25px;

  line-height: 2.4em;
  font-size: 16px;
  margin-right: auto;

  :focus {
    outline: 0;
  }
`;

export default Input;
