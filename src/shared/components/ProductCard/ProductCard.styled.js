import styled from "styled-components";
import { Link } from "react-router-dom";

export const ItemStyle = styled.li`
  vertical-align: top;
  min-width: 350px;
  width: 25%;
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: #333;
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
  margin: 6px;
  border: 1px solid #f5f2ea;
  height: calc(100% - calc(12px + 1 * 2px));
  background: #fff;
  &:hover {
    transform: translateY(-4px);
    background-color: #fff;
    border: 1px solid #e8dfd8;
    box-shadow: 0 7px 15px rgba(59, 55, 43, 0.25);

    .buy-button {
      visibility: visible;
    }
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  display: inline-block;
`;

export const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  height: auto;
  width: auto;
  font-size: 14px;
  vertical-align: middle;
  aspect-ratio: auto 240 / 240;
`;

export const Content = styled.div`
  padding: 20px 24px;
`;

export const Name = styled.h2`
  background-color: transparent;
  margin: 0 0 6px;
  padding-bottom: 2px;
  font-size: 15px;
  line-height: 1.2;
  font-weight: normal;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2.4em;
`;

export const Price = styled.p`
  align-self: center;
  color: #000;
  font-size: 15px;
  font-weight: normal;
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
`;
