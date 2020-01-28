import styled from "styled-components";

const LoadMore = styled.button`
  /* border: 1px solid black; */
  width: auto;
  height: 40px;
  border-radius: 40px;
  background-color: white;
  /* Remove border style for safari */
  border-style: none;

  margin-top: 10px;
  margin-bottom: 40px;

  /* background-color: #919191; */
  color: rgba(0, 0, 0, 0.54);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);

  font-size: 16px;
  text-align: center;

  :focus {
    outline: none;
  }
`;

export default LoadMore;
