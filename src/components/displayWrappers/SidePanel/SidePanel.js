import React from 'react'
import styled from 'styled-components'

import { ReactComponent as PRFlag } from '../../../assets/General/PRFlag.svg'
import Logo from '../../Primitive/SidePanel/Logo'
import Info from '../../Primitive/SidePanel/Info'
import ActionButton from '../../Primitive/General/ActionButton'

const Wrapper = (props) => {
    return (
      <div {...props}>
        <PRFlag />
        <Logo />
        <Info>
          Voz de Puerto Rico (Voz de PR) is a social platform that allows users to
          take an active role in the progression of human needs, social betterment
          and national development of Puerto Rico. It is community based, and
          provides a voice to those who wish to enact change across society.
        </Info>
        <ActionButton>Create Cause</ActionButton>
        <ActionButton secondary>Create Post</ActionButton>
      </div>
    );
  };
  
  const SidePanel = styled(Wrapper)`
    /* border: 1px solid black; */
    width: 300px;
    height: 533px;
    background-color: #fff;
  
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);
  
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
  `;

  export default SidePanel