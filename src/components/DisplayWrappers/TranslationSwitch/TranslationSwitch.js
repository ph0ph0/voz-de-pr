import React, { useState } from "react";
import styled from "styled-components";

import UISwitch from "react-switch";
import { useLanguage } from "CustomHooks/useLanguage";

const displayText = {
  en: "Select language",
  sp: "Seleccione el idioma"
};

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
  margin-bottom: -10px;
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

const SwitchWrapper = ({ change, state, large, ...props }) => {
  return (
    <div {...props}>
      <LanguageText>{large ? "Español" : "Esp"}</LanguageText>
      <UISwitch
        onChange={change}
        checked={state}
        offColor={"#FEC32D"}
        onColor={"#CC162B"}
        checkedIcon={false}
        uncheckedIcon={false}
      />
      <LanguageText>{large ? "English" : "En"}</LanguageText>
    </div>
  );
};

const Switch = styled(SwitchWrapper)`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
`;

const TranslationSwitchWrapper = ({ large, ...props }) => {
  const { language, switchLanguage } = useLanguage();
  const [isOn, setOn] = useState(language === "spanish" ? false : true);

  const change = () => {
    window.log(`TranslationSwitch Tapped...`);
    switchLanguage(isOn ? "spanish" : "english");
    setOn(!isOn);
  };

  return (
    <div {...props}>
      {large && <HorizontalRule />}
      <SwitchLabel>
        <SwitchTitle>
          {language === "spanish" ? displayText.sp : displayText.en}
        </SwitchTitle>
        <Switch change={change} state={isOn} large={large} />
      </SwitchLabel>
    </div>
  );
};

const TranslationSwitch = styled(TranslationSwitchWrapper)`
  /* background-color: red; */
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default TranslationSwitch;
