import React, { useState } from "react";
import styled from "styled-components";

import UISwitch from "react-switch";

const HorizontalRule = styled.div`
  width: 160px;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
`;

const SwitchTitle = styled.span`
  /* border: 1px solid red; */
  margin-left: auto;
  margin-right: auto;
  color: rgba(0, 0, 0, 0.54);
  font-size: 14px;
  justify-self: center;
  align-self: center;
`;

const LanguageText = styled.p`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  padding: 5px;
`;

const SwitchLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SwitchWrapper = ({ change, state, ...props }) => {
  return (
    <div {...props}>
      <LanguageText>Español</LanguageText>
      <UISwitch
        onChange={change}
        checked={state}
        offColor={"#FEC32D"}
        onColor={"#CC162B"}
        checkedIcon={false}
        uncheckedIcon={false}
      />
      <LanguageText>English</LanguageText>
    </div>
  );
};

const Switch = styled(SwitchWrapper)`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
`;

const TranslationSwitchWrapper = ({ ...props }) => {
  const [on, setOn] = useState(false);

  const change = () => {
    window.log(`CHANGING`);
    setOn(!on);
  };

  const displayText = {
    en: "Select a language",
    sp: "Selecciona un idioma"
  };

  return (
    <div {...props}>
      <HorizontalRule />
      <SwitchLabel>
        <SwitchTitle>Select language</SwitchTitle>
        <Switch change={change} state={on} />
      </SwitchLabel>
    </div>
  );
};

const TranslationSwitch = styled(TranslationSwitchWrapper)`
  /* border: 1px solid green; */
  margin-top: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default TranslationSwitch;
