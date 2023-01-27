import styled from "styled-components";

export const MyHeader = styled.div`
display: flex;
  justify-content: space-around;
  background: ${({theme}) => theme.background};
  height:100px;
  align-items:center;
  color:black;
  border: 3px solid black;
`