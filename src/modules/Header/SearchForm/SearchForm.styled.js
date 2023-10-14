import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

export const SearchFormContainer = styled.div`
  text-align: center;
  position: relative;
  width: 410px;

  &:hover,
  &:focus {
    border: 2px solid ${(p) => p.theme.colors.accentColor};
    border-radius: 50px;
    & svg {
      color: ${(p) => p.theme.colors.accentColor};
    }
    
  }
`;

export const SearchInput = styled.input`
  border-radius: 50px;
  outline: none;

  box-sizing: border-box;
  width: 100%;
  height: 50px;
  padding: 0px 16px 0px 42px;
  background: rgb(255, 255, 255);
  font-size: 18px;
  border: 1px solid rgb(212, 212, 212);
  color: ${(p) => p.theme.colors.color504056};
  &:hover,
  &:focus {
    outline: 2px solid ${(p) => p.theme.colors.accentColor};
  }
`;

export const SearchButton = styled.button`
  border: none;

  cursor: pointer;

  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  width: 50px;

  padding: 0px;
  background-color: transparent;
  transition: all 0.15s ease 0s;
`;

export const SearchIcon = styled(BsSearch)`
  width: 20px;
  height: 20px;
  color: #d2b9a6;
`;
