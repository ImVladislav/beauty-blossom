import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

export const SearchFormContainer = styled.div`
  text-align: center;
  position: relative;
  margin: 5px 10px 5px 30px;
  transition: all 0.15s ease 0s;
  &:hover,
  &:focus {
    & svg {
      color: ${(p) => p.theme.colors.accentColor};
    }
  }
  @media screen and (min-width: 768px) {
    margin-left: auto;
  }
  @media screen and (min-width: 1024px) {
    width: 300px;
  }

  @media screen and (min-width: 1440px) {
    width: 410px;
  }
`;

export const SearchInput = styled.input`
  font-size: ${(p) => p.theme.fontSizes.xs}px;
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.body};
  line-height: 1;
  letter-spacing: 0.19px;
  outline: none;
  border-radius: 25px;
  border: 0.574px solid ${(p) => p.theme.colors.textColor};
  box-sizing: border-box;
  width: 100%;
  padding: 5px 20px 5px 35px;
  color: ${(p) => p.theme.colors.textColor};
  background: ${(p) => p.theme.colors.white};
  transition: all 0.15s ease 0s;
  &:hover,
  &:focus {
    border: 1px solid ${(p) => p.theme.colors.accentColor};
  }
  @media screen and (min-width: 768px) {
    border-radius: 50px;
    width: 275px;
    height: 35px;
    padding: 0px 16px 0px 42px;
    font-size: ${(p) => p.theme.fontSizes.s}px;
    border: 1px solid ${(p) => p.theme.colors.border};
  }
  @media screen and (min-width: 1024px) {
    width: 350px;
    height: 50px;
    font-size: ${(p) => p.theme.fontSizes.m}px;
  }
  @media screen and (min-width: 1440px) {
    width: 100%;
  }
`;

export const SearchButton = styled.button`
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0px;
  left: 15px;
  bottom: 0px;
  padding: 0px;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    left: 20px;
  }
`;

export const SearchIcon = styled(BsSearch)`
  width: 10px;
  height: 10px;
  color: ${(p) => p.theme.colors.textColor};
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
