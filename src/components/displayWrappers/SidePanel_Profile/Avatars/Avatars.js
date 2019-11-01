import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import AvatarRowWithThree from './AvatarRowWithThree'
import AvatarRowWithTwo from './AvatarRowWithTwo'
import Person from '../../../../assets/General/Person.png'

//This needs to be altered when we have access to the avatars!

const AvatarsArray = [
    Person,
    Person,
    Person,
    Person,
    Person,
    Person,
    Person,
    Person,
    Person,
    Person
  ];
  
  const AvatarsWrapper = ({ selectedAvatar, onClickAv, ...props }) => {

    //Note that objects can only have string keys, so the keys are converted to a string.
  
    const RowOfThree_One = {
      0: AvatarsArray[0],
      1: AvatarsArray[1],
      2: AvatarsArray[2]
    };
    const RowOfTwo_One = {
      3: AvatarsArray[3],
      4: AvatarsArray[4]
    };
    const RowOfThree_Two = {
      5: AvatarsArray[5],
      6: AvatarsArray[6],
      7: AvatarsArray[7]
    };
    const RowOfTwo_Two = {
      8: AvatarsArray[8],
      9: AvatarsArray[9]
    };
  
    return (
      <div {...props}>
        <AvatarRowWithThree
          avatars={RowOfThree_One}
          onClickAv={onClickAv}
          selectedAvatar={selectedAvatar}
        />
        <AvatarRowWithTwo
          avatars={RowOfTwo_One}
          onClickAv={onClickAv}
          selectedAvatar={selectedAvatar}
        />
        <AvatarRowWithThree
          avatars={RowOfThree_Two}
          onClickAv={onClickAv}
          selectedAvatar={selectedAvatar}
        />
        <AvatarRowWithTwo
          avatars={RowOfTwo_Two}
          onClickAv={onClickAv}
          selectedAvatar={selectedAvatar}
        />
      </div>
    );
  };
  
  const Avatars = styled(AvatarsWrapper)`
    /* border: 1px solid red; */
    width: auto;
    height: auto;
  
    padding: 0px;
    margin: 0px;
  
    display: flex;
    flex-direction: column;
  `;

Avatars.propTypes = {
    selectedAvatar: PropTypes.string,
    onClickAv: PropTypes.func.isRequired
}

export default Avatars