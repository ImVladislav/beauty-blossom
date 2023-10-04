import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

export const Wrap = styled.div`
  position: relative;
  &:hover,
  &:focus {
    border: 1px solid ${(p) => p.theme.colors.accentColor};
    & svg {
      color: ${(p) => p.theme.colors.accentColor};
    }
  }
`;
export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  padding: 0px 36px 0px 12px;
  background: rgb(255, 255, 255);
  font-size: 14px;
  border: 1px solid rgb(212, 212, 212);
  color: rgb(0, 0, 0);
`;
export const Button = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  width: 32px;
  border: 0px;
  padding: 0px;
  background-color: transparent;
  transition: all 0.15s ease 0s;
  outline: none;
`;
export const SearchIcon = styled(BsSearch)`
  width: 10px;
  height: 10px;
  color: #d2b9a6;
`;
