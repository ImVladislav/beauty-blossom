import styled from "styled-components";

export const ContactTitle = styled.h3`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;
export const ContactWraper = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 0 15px; */
`;

export const ContactGroup = styled.div`
  position: relative;
  break-inside: avoid;
  /* padding-bottom: 18px; */
  transform: translateZ(0);
  display: grid;
  /* margin-left: 20px; */
`;

export const ContactItem = styled.a`
  margin-bottom: 8px;
  text-decoration: none;
  color: #000000;

  font-size: 17px;
  font-weight: 400;
`;
export const Phone = styled.img`
  position: absolute;
  left: -28px;
`;
