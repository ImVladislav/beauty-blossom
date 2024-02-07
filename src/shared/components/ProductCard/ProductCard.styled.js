import styled from "styled-components";
import { Link } from "react-router-dom";

export const ItemStyle = styled.li`
  width: 320px;

  &.unavailable {
    opacity: 0.5;
  }
  @media screen and (min-width: 1024px) {
    width: 320px;
  }
  @media screen and (min-width: 1440px) {
    width: 350px;
  }
`;

export const ProductTags = styled.div`
  display: grid;
  justify-content: space-between;
  position: absolute;
  bottom: 3px;
`;
export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: ${(p) => p.theme.colors.textColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accentColor};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transition: transform 0.2s;
  position: relative;
  height: 100%;
  border-radius: 0;
  border: 1px solid ${(p) => p.theme.colors.borderCard};
  background: ${(p) => p.theme.colors.white};
  &:hover {
    transform: translateY(-4px);
    background-color: ${(p) => p.theme.colors.white};
    border: 1px solid ${(p) => p.theme.colors.menuBg};
    box-shadow: 0 7px 15px rgba(59, 55, 43, 0.25);

    .buy-button {
      visibility: visible;
    }
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  max-width: fit-content;
  max-height: 240px;
  margin-top: 5px;
`;

export const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  height: auto;
  width: auto;
  font-size: ${(p) => p.theme.fontSizes.s}px;
`;

export const Content = styled.div`
  padding: 20px 24px;
`;

export const Name = styled.h2`
  background-color: transparent;
  margin: 0 0 6px;
  padding-bottom: 2px;
  font-size: ${(p) => p.theme.fontSizes.sm}px;
  line-height: 1.2;
  font-weight: ${(p) => p.theme.fontWeights.body};
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2.4em;
`;

export const Price = styled.p`
  align-self: center;
  color: ${(p) => p.theme.colors.textColor};
  font-size: ${(p) => p.theme.fontSizes.m}px;
  font-weight: ${(p) => p.theme.fontWeights.body};
  line-height: 1.2;
  text-align: center;
  display: flex;
  align-items: center;
  margin-top: 9px;
  justify-content: center;
`;

export const ButtonWrap = styled.div`
  position: absolute;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;
export const ButtonIncDec = styled.span`
  position: relative;
  display: inline-block;
  vertical-align: top;
  cursor: pointer;
  color: ${(p) => p.theme.colors.textColor};
  border: 0;
  padding: 0;
  background: transparent;
  font-size: ${(p) => p.theme.fontSizes.m}px;
  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
  }
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.l}px;
  }
`;

export const CounterBlock = styled.div`
  position: relative;
  width: 75px;
  height: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${(p) => p.theme.colors.textColor};
  align-items: center;
  font-size: ${(p) => p.theme.fontSizes.s}px;
  margin-bottom: 10px;
  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;
    width: 85px;
  }
`;
export const InputIncDec = styled.input`
  text-align: center;
  font-family: monospace;
  outline: none;
  color: ${(p) => p.theme.colors.textColor};
  border: 0;
  padding: 0;
  background-color: transparent;
  font-size: ${(p) => p.theme.fontSizes.xs}px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.s}px;
  }
`;
