import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

export const SearchFormContainer = styled.div`
  text-align: center;
  position: relative;
  width: 350px;
  &:hover,
  &:focus {
    border: 2px solid ${(p) => p.theme.colors.accentColor};
    border-radius: 5px;
    & svg {
      color: ${(p) => p.theme.colors.accentColor};
    }
  }
`;

export const SearchInput = styled.input`
  border-radius: 5px;
  outline: none;

  box-sizing: border-box;
  width: 100%;
  height: 50px;
  padding: 0px 36px 0px 12px;
  background: rgb(255, 255, 255);
  font-size: 18px;
  border: 1px solid rgb(212, 212, 212);
  color: rgb(0, 0, 0);
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
  right: 0px;
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
