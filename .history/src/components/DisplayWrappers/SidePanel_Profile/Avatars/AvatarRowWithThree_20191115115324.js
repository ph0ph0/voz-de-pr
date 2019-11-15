import React from "react";
import styled from "styled-components";

import Avatar from "../../../Primitive/SidePanel_Profile/Avatars/Avatar";
import { mockApi } from "../API/__mocks__/mockApi";

const AvatarRowThreeWrapper = ({ avatars, api, ...props }) => {
  // console.log(`cunt ${Object.keys(avatars)}`)

  return (
    <div {...props}>
      {Object.keys(avatars).map(key => {
        const png = avatars[key];
        return (
          <Avatar
            src={png}
            key={key}
            tag={key}
            api={api}
            onClick={() => api.onClickAv(key)}
          />
        );
      })}
    </div>
  );
};

const AvatarRowWithThree = styled(AvatarRowThreeWrapper)`
  /* border: 1px solid black; */

  display: flex;
`;

AvatarRowWithThree.propTypes = {
  api: mockApi
};

export default AvatarRowWithThree;
