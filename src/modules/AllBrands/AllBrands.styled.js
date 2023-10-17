import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BrandPageContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 6 стовпців */
  grid-gap: 20px; /* Відступ між стовпцями та рядками */
  list-style: none;
  padding: 0;
`;

export const BrandItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BrandCard = styled.div`
  border-radius: 8px;
  padding: 16px;
  max-width: 200px;
`;

export const BrandName = styled(NavLink)`
  font-size: 1.5rem;
  margin: 0;
  display: flex;
  text-align: center;
`;
