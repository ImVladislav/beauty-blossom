import ScrollToTop from "react-scroll-to-top";
import styled from "styled-components";

export const StyleScrollToTop = styled(ScrollToTop)`
  background-color: #833989;
  font-size: 24px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
  text-align: center;
  touch-action: manipulation;
  transition: background-color 0.3s;
  line-height: 24px;
  padding: 5px;
  display: inline-block;
  vertical-align: middle;
  &:hover {
    background-color: #504056;
    box-shadow: 0px 3.76642px 3.76642px 0px rgba(0, 0, 0, 0.25);
  }
`;
