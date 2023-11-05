import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

export const SearchFormContainer = styled.div`
  text-align: center;
  position: relative;
  margin: 5px 25px 5px 30px;
  transition: all 0.15s ease 0s;
  &:hover,
  &:focus {
    /* border: 2px solid ${(p) => p.theme.colors.accentColor};
    border-radius: 50px; */
    & svg {
      color: ${(p) => p.theme.colors.accentColor};
    }
  }
  @media screen and (min-width: 768px) {
    margin-le: auto;
  }
  @media screen and (min-width: 1024px) {
    width: 300px;
  }

  @media screen and (min-width: 1440px) {
    width: 410px;
  }
`;

export const SearchInput = styled.input`
  font-size: 12.662px;
  font-style: normal;
  font-weight: 400;
  line-height: 102.312%; /* 12.955px */
  letter-spacing: 0.19px;

  outline: none;
  border-radius: 24.614px;
  border: 0.574px solid #504056;

  box-sizing: border-box;
  width: 100%;
  /* height: 23px; */
  padding: 5px 20px 5px 35px;

  color: ${(p) => p.theme.colors.textColor};
  transition: all 0.15s ease 0s;
  &:hover,
  &:focus {
    border: 1px solid ${(p) => p.theme.colors.accentColor};
  }
  @media screen and (min-width: 768px) {
    border-radius: 50px;
    outline: none;

    box-sizing: border-box;
    width: 100%;
    height: 35px;
    padding: 0px 16px 0px 42px;
    background: #fff;
    font-size: 18px;
    border: 1px solid ${(p) => p.theme.colors.border};
    color: ${(p) => p.theme.colors.textColor};
  }
  @media screen and (min-width: 1024px) {
    border-radius: 50px;
    outline: none;

    box-sizing: border-box;
    width: 100%;
    height: 50px;
    padding: 0px 16px 0px 42px;
    background: #fff;
    font-size: 18px;
    border: 1px solid ${(p) => p.theme.colors.border};
    color: ${(p) => p.theme.colors.textColor};
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const SearchButton = styled.button`
  border: none;

  cursor: pointer;

  position: absolute;
  top: 0px;
  left: 15px;
  bottom: 0px;
  /* width: 35px; */

  padding: 0px;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    left: 20px;
  }

  @media screen and (min-width: 1440px) {
    /* width: 50px; */
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

  @media screen and (min-width: 1440px) {
  }
`;
