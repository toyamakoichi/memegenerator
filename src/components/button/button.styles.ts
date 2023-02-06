import styled from "styled-components";
import { ThemeInterface } from "../themecontext/theme";

export const MyButton = styled.button<{ theme: ThemeInterface }>`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 3px 3px gray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${({ theme }) => theme.text};
    color:${({ theme }) => theme.background};
  }
  &:disabled {
    cursor: default;
    opacity: 0.3;
    pointer-events:none;
  }
`;