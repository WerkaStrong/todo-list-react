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

export const StyledDiv= styled.div`
    padding: 20px;

    @media(max-width: 767px) {
        padding: 1px;
    }
`