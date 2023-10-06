import styled from "styled-components";
import { Link } from "react-router-dom";

export const FrontBrands = styled.div`
    margin: 0 0 40px;
`

export const LayoutWarp = styled.div`
    position: relative;
    padding: 20px 20px;
    border: 1px solid none;
    border-radius: 0;
    display: flex;
`

export const BrandsList = styled.ul`
    position: relative;
    padding: 20px 20px;
    border: 1px solid none;
    border-radius: 0;
    display: flex;
    margin-left: auto;
    margin-right: auto;
`

export const BrandsItem = styled.li`
    position: relative;
    padding: 20px 20px;
    border: 1px solid none;
    border-radius: 0;

`
export const BrandImage = styled.img`
    width: 180px;
    height: 100px;
        &:hover{
            box-shadow: 0 7px 15px rgba(59,55,43,0.25);
    z-index: 3;
    cursor: pointer;
        width: 200px;
    height: 120px;
        }
`
export const BrandLink = styled(Link)`
    justify-content: center;
    align-items: center;
    height: 100px;
    padding: 10px;
    border: 0;
    text-align: center;
`

