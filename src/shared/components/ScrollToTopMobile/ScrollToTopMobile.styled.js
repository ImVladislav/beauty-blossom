import ScrollToTop from "react-scroll-to-top";
import styled from "styled-components";

export const StyleScrollToTop = styled(ScrollToTop)`
  background-color: #833989;
  /* font-size: 24px; */
  /* padding: 10px 20px; */
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
  /* text-align: center; */

  transition: background-color 0.3s;
  &:hover {
    background-color: #504056;
    box-shadow: 0px 3.76642px 3.76642px 0px rgba(0, 0, 0, 0.25);
  }
`;
