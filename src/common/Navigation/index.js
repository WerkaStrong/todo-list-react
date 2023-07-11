import React from "react";
import { StyledLi, StyledNav, StyledNavLink, StyledUl } from "./styled";

export const Navigation = () => (
    <StyledNav>
        <StyledUl>
            <StyledLi>
                <StyledNavLink
                    to="/zadania"
                >
                    Zadania
                </StyledNavLink>
            </StyledLi>
            <StyledLi>
                <StyledNavLink
                    to="/autor"
                >
                    O autorze
                </StyledNavLink>
            </StyledLi>
        </StyledUl>
    </StyledNav>

);