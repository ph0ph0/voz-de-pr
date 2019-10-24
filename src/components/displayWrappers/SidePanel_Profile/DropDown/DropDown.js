import React from 'react'
import styled from 'styled-components'

import InlineContent from './InlineContent'
import ListOfLocations from './ListOfLocations'

const DropDownWrapper = ({
    toggleList,
    listOpen,
    onChangeLocationValue,
    locationValue,
    onLocationSelected,
    resetDropDown,
    ...props
  }) => {
    return (
      <div {...props}>
        <InlineContent
          listOpen={listOpen}
          onClick={() => toggleList()}
          onChangeLocationValue={onChangeLocationValue}
          locationValue={locationValue}
          resetDropDown={resetDropDown}
        />
        {listOpen && (
          <ListOfLocations
            locationValue={locationValue}
            onLocationSelected={onLocationSelected}
          />
        )}
      </div>
    );
  };
  
  const DropDown = styled(DropDownWrapper)`
    background-color: white;
    border-radius: 5px;
    width: auto;
    height: auto;
  
    padding: 0px;
    margin-bottom: 20px;
    /* Keeps the DropDown in place when it opens as its position will now be absolute */
    margin-top: ${props => (props.listOpen ? "117px" : "0px")};
    border-style: solid;
    border-width: 1px;
    border-color: ${props => (props.listOpen ? "#96C8DA" : "#d8d8d8")};
    /* Position absolute allows us to overlay the content below */
    position: ${props => (props.listOpen ? "absolute" : "relative")};
    box-shadow: ${props =>
      props.listOpen ? "0 0 10px rgba(0, 0, 0, 0.12)" : "0 "};
    z-index: 1000;
    cursor: pointer;
  
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `;
  
  export default DropDown;