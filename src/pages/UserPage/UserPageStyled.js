import { Link } from "react-router-dom";
import styled from "styled-components";

export const Bgd = styled.main`
  display: flex;
  justify-content: center;
`;

export const Nav = styled.nav`
  display: grid;
  padding: 0px 20px;
  margin-right: auto;
  margin-bottom: auto;

  @media (max-width: 768px) {
    margin-left: auto;
  }
`;

export const StyledLink = styled(Link)`
  margin: 10px 0px;
`;
export const CabinetLink = styled(Link)`
  border: 1px solid ${(p) => p.theme.colors.textColor};
  border-radius: 75px;
  padding: 0px 65px;
  text-decoration: none;
  height: 66px;
  color: ${(p) => p.theme.colors.textColor};
  text-align: center;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  font-size: ${(p) => p.theme.fontSizes.l}px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff6e9;
    opacity: 0;
    pointer-events: none;
    z-index: -1;
  }

  &:hover {
    opacity: 1;
    color: ${(p) => p.theme.colors.black};
  }

  &:hover::before {
    opacity: 1;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0px 20px;
  }
  @media (max-width: 768px) {
    padding: 0px 30px;
  }
`;
export const UserPageBlock = styled.div`
  display: flex;

  @media (min-width: 1440px) {
    width: 1400px;
    padding: 0px 20px;
    margin-right: auto;
    margin-bottom: auto;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const Title = styled.h2`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #c7c7c7;
  margin: 40px 0px;
`;
export const RedStar = styled.span`
  color: red;
`;

export const ContactInformInputBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    flex-direction: column;
    align-items: center;
  }
`;

export const ContactInformInput = styled.input`
  border-radius: 50px;
  padding: 4px 10px;
  width: 480px;

  @media (min-width: 1440px) {
    width: 480px;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 380px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 280px;
  }
  @media (max-width: 768px) {
    width: 350px;
  }
`;

export const ContactInformForm = styled.form`
  margin-left: 50px;
  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;

export const ContactInformSubButton = styled.button`
  border: 1px solid ${(p) => p.theme.colors.textColor};
  border-radius: 75px;
  padding: 0px 85px;
  text-decoration: none;
  height: 50px;
  color: ${(p) => p.theme.colors.textColor};
  text-align: center;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(p) => p.theme.fontSizes.l}px;
  position: relative;
  background: transparent;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff6e9;
    opacity: 0;
    pointer-events: none;
    z-index: -1;
  }

  &:hover {
    opacity: 1;
    color: ${(p) => p.theme.colors.black};
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const PaymentHistoryTd = styled.td`
  border: 1px solid #c7c7c7;
  text-align: center;

  @media (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: ${(p) => p.theme.fontSizes.sm}px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: ${(p) => p.theme.fontSizes.s}px;
  }
  @media (max-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.xs}px;
  }
`;

export const PaymentHistoryTh = styled.th`
  border: 1px solid #c7c7c7;
  background-color: #fff6e9 !important;
  text-align: center;
  white-space: nowrap;

  @media (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: ${(p) => p.theme.fontSizes.sm}px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: ${(p) => p.theme.fontSizes.s}px;
  }

  @media (max-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.xs}px;
  }
`;

export const PaymentPagination = styled.div`
  display: flex;
  justify-content: end;
`;

export const PaymentPaginationButton = styled.button`
  border: 1px solid #c7c7c7;
  text-align: center;

  align-items: center;
  position: relative;
  background: transparent;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff6e9;
    opacity: 1;
    pointer-events: none;
    z-index: -1;
  }

  &.current {
    font-weight: ${(p) => p.theme.fontWeights.bold};
    background: #fff6e9;
  }
`;

export const CabinetBlock = styled.div`
  padding: 0, 20px;
`;
export const DetailTableThumb = styled.div`
  padding: 0, 20px;

  @media (min-width: 1440px) {
    width: 890px;
    padding: 0, 20px;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 600px;
    padding: 0, 20px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 450px;
    padding: 0, 20px;
  }
  @media (max-width: 768px) {
    padding: 0, 20px;
  }
`;
export const Table = styled.table`
  width: 100%;
`;

export const ShowDetailButton = styled.button`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
`;

export const PaymentHistoryTr = styled.tr`
  &.selected {
    background-color: #ffe9c9;
  }
`;

export const FeedbackText = styled.p`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const FeedbackTextArea = styled.textarea`
  padding: 20px;
  border-radius: 50px;
  margin: 20px;
  width: 90%;
  resize: none;
`;

export const FeedbackThumb = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1440px) {
    width: 905px;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 505px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 373px;
  }
`;

export const SubmitFeedback = styled.button`
  background: transparent;
  border: 1px solid ${(p) => p.theme.colors.textColor};
  border-radius: 75px;
  padding: 0px 65px;
  text-decoration: none;
  height: 66px;
  color: ${(p) => p.theme.colors.textColor};
  text-align: center;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  font-size: ${(p) => p.theme.fontSizes.l}px;
  max-width: 345px;
  &:hover {
    background: #fff6e9;
    color: ${(p) => p.theme.colors.black};
  }
`;

export const OptUserTag = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 16px;
`;
