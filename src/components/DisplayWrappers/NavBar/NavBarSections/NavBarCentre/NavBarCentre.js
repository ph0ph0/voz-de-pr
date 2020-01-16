import React from "react";
import styled from "styled-components";

import SearchBar from "../../../../Primitive/NavBar/SearchBar";

const Wrapper = ({ placeholder, ...props }) => {
  const submit = event => {
    window.log(`PRINT HIT`);
    event.preventDefault();
  };

  const onChange = event => {
    const searchText = event.target.value;
    window.log(`searchText ${searchText}`);
  };

  return (
    <div {...props}>
      <form onSubmit={event => submit(event)}>
        <SearchBar placeholder={placeholder} type="text" onChange={onChange} />
      </form>
    </div>
  );
};

const NavBarCentre = styled(Wrapper)`
  /* background-color: red; */
  height: 72px;
  flex-grow: 10;
  flex-shrink: 5;
  flex-basis: 33.33333%;
  /* flex-shrink: 2; */
  /* width: 33.3333%; */

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default NavBarCentre;
