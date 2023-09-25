import styled from "styled-components";
import { BsFillTelephoneFill } from "react-icons/bs";

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const ContactsElips = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #d2b9a6;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const ContactsIcon = styled(BsFillTelephoneFill)`
  width: 10px;
  height: 10px;
  color: #d2b9a6;
`;
export const Link = styled.a`
  text-decoration: none;
  color: #000;
`;
