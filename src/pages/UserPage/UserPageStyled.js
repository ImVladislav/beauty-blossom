import { Link } from "react-router-dom"
import styled from "styled-components"

export const Nav = styled.nav`
display: grid;
padding: 20px;
`

export const StyledLink = styled(Link)`

margin: 10px 0px;
`
export const CabinetLink = styled(Link)`

border: 1px solid #504056;
border-radius: 20px;
padding: 15px;
&hover{
    background: #FFF6E9;
    color: #FFF6E9;
}
`