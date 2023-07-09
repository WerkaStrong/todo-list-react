import { NavLink} from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
    color: white;
    list-style: none;
    
    &.active{
        font-weight: bold;
        text-decoration: none;
    }
`;