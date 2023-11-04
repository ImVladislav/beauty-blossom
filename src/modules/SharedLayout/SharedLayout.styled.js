import styled from "styled-components";
import flowers from "../../images/flowers.png";

export const Bgd = styled.div`
  /* background-image: url(${flowers}); */
  background-size: cover;
  /* pointer-events: none; */
  /* max-width: 1440px; */
  width: 100%; /* Розтягуємо на всю ширину */
  height: 100%; /* Розтягуємо на всю висоту */
  margin-left: auto;
  margin-right: auto;
  /* background-size: contain; */
  display: flex;
  justify-content: center;
`;
