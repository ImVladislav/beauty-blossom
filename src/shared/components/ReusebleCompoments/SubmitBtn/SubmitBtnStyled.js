import styled from "styled-components";

export const SubmitBTN= styled.button`
    color: #f9f8f6;
    border: 0;
    background: ${(p) => p.theme.colors.accentColor};
    box-shadow: none;
    width: ${(props) => props.width || 'auto'};
    height: 40px;
    border-radius: 7px;
    /* margin-left: ${(props) => props.width || 'auto'};
    margin-right: ${(props) => props.width || 'auto'}; */
    cursor: pointer;
  &:hover {
    color: #ff0000; /* Змініть колір при наведенні */
  }

`