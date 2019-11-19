import React from "react";
import styled from "styled-components";

// import PRFlag from '../../../assets/SidePanel/FuckingFlag.png'
import { ReactComponent as PRFlag } from "../../../assets/SidePanel/PRFlag.svg";
import Logo from "../../Primitive/SidePanel/Logo";
import SidePanelProfileBody from "./SidePanel_Profile_Body";
import ActionButton from "../../Primitive/General/ActionButton";

import useApi from "../../../CustomHooks/useAPI";
import SidePanelProfileAPI from "./API/SidePanelProfileAPI";

import { useQuery } from "@apollo/react-hooks";
import { listSubjects } from "../../../graphql/queries";
import gql from "graphql-tag";

const SidePanelWrapper = props => {
  const api = useApi(SidePanelProfileAPI, {
    name: "",
    locationValue: "",
    selectedLocation: "",
    listOpen: false,
    dropDownIsErrored: false,
    selectedAvatar: null
  });

  const { loading, error, data } = useQuery(gql(listSubjects));

  window.log(`error,: ${error}, data: ${JSON.stringify(data)}`);

  return (
    <div {...props}>
      <PRFlag />
      <Logo />
      <SidePanelProfileBody api={api} />
      <ActionButton secondary onClick={() => api.submit()}>
        Change
      </ActionButton>
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
