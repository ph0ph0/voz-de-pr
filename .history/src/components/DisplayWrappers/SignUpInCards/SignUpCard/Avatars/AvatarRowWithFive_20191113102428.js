import React from "react";
import styled from "styled-components";

import { SignUpInCardApiPropTypes } from "../API/proptypes/SignUpCardApiPropTypes";

import Avatar from "../../../../../Primitive/SidePanel_Profile/Avatars/Avatar";

const AvatarSignUp = styled(Avatar)`
  margin: 5px;
`;

const AvatarRowFiveWrapper = ({ avatars, api, ...props }) => {
  // console.log(`cunt ${Object.keys(avatars)}`)

  return (
    <div {...props}>
      {Object.keys(avatars).map(key => {
        const png = avatars[key];
        return (
          <AvatarSignUp
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

const AvatarRowWithFive = styled(AvatarRowFiveWrapper)`
  /* border: 1px solid black; */

  display: flex;
`;

AvatarRowWithFive.propTypes = {
  api: SignUpInCardApiPropTypes
};

export default AvatarRowWithFive;
