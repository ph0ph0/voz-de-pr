import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Avatar from '../../../Primitive/SidePanel_Profile/Avatars/Avatar'

const AvatarRowThreeWrapper = ({
    avatars,
    onClickAv,
    selectedAvatar,
    ...props
  }) => {
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
              onClick={() => onClickAv(key)}
              selectedAvatar={selectedAvatar}
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
    avatars: PropTypes.node.isRequired,
    onClickAv: PropTypes.func.isRequired,
    selectedAvatar: PropTypes.number.isRequired
}

export default AvatarRowThreeWrapper