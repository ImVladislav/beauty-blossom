import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainBanner = styled.img`
 max-width: 1440px;
`
export const StyledLink = styled(Link)`
    width: 396px;
    height: 95px;
    background: #FF49AB;
    border-Radius: 25px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: white;
    margin-left: auto;
    margin-right: auto; 
    font-weight: bold;
    text-decoration: none;
        &:hover {
  color: #cccccc ;
  background: #f66d52;
  background: linear-gradient(to top, #FF49AB, #FF49AB);
    }
`

export const Thumb = styled.div`
  position: absolute;
  bottom: 0px;
  right: 130px;
  max-width: 100%; 
  top: 60px;
  text-align: center;
`
export const BannerTitle = styled.h3`
margin-bottom: 70px;
color: #FF49AB;
font-size: 70px;

`

export const Background = styled.div`
background: #f9f8f6;


`