import React, { useState } from "react";
import styled from "styled-components";

// import PRFlag from '../../../assets/SidePanel/FuckingFlag.png'
import { ReactComponent as PRFlag } from "../../../assets/SidePanel/PRFlag.svg";
import Logo from "../../Primitive/SidePanel/Logo";
import SidePanelProfileBody from "./SidePanel_Profile_Body";
import ActionButton from "../../Primitive/General/ActionButton";
import LoadingSpinner from "components/Primitive/General/LoadingSpinner";
import TranslationSwitch from "./TranslationSwitch/TranslationSwitch";

import useApi from "../../../CustomHooks/useAPI";
import SidePanelProfileAPI from "./API/SidePanelProfileAPI";

const SidePanelWrapper = props => {
  const api = useApi(SidePanelProfileAPI, {
    locationValue: "",
    selectedLocation: "",
    listOpen: false,
    dropDownIsErrored: false,
    selectedAvatar: null,
    avatar: null
  });

  return (
    <div {...props}>
      <PRFlag />
      <Logo />
      <SidePanelProfileBody api={api} />
      <ActionButton
        secondary
        onClick={() => api.submit()}
        disabled={api.loading && "disabled"}
      >
        {api.loading ? <LoadingSpinner /> : "Cambiar"}
      </ActionButton>
      <TranslationSwitch />
    </div>
  );
};

const SidePanel_Profile = styled(SidePanelWrapper)`
  /* border: 1px solid black; */
  width: 300px;
  height: auto;
  background-color: #fff;

  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);

  padding-bottom: 20px;
  margin-top: 100px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

export default SidePanel_Profile;
