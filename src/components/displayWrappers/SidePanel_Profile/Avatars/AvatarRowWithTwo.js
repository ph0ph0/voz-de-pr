import React from 'react'
import styled from 'styled-components'

import Avatar from '../../../Primitive/SidePanel_Profile/Avatars/Avatar'

const AvatarRowTwoWrapper = ({
    selectedAvatar,
    avatars,
    onClickAv,
    ...props
  }) => {
    return (
      <div {...props}>
        {Object.keys(avatars).map(key => {
          const png = avatars[key];
          return (
            <Avatar
              src={png}
              key={key}
              tag={key}
              onClick={() => onClickAv(key)}
              selectedAvatar={selectedAvatar}
            />
          );
        })}
      </div>
    );
  };
  
  const AvatarRowWithTwo = styled(AvatarRowTwoWrapper)`
    /* border: 1px solid black; */
  
    display: flex;
    justify-content: center;
  `;

export default AvatarRowWithTwo