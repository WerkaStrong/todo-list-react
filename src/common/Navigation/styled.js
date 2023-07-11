import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    
    &.active{
        font-weight: bold;
    }

    &:hover{
        text-shadow: 0px 0px white;
    }
   
`;

export const StyledNav = styled.nav`
    background-color: teal;
    height: 65px;
    display:flex;
    justify-content: center;
    align-items: center;
`;

export const StyledUl = styled.ul`
    margin: 0 10px;
    display: flex;
    flex-direction: row;
`;

export const StyledLi = styled.li`
    margin: auto 10px;
    list-style: none;
`;
