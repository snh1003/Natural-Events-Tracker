import { NavigationControl, NavigationControlProps } from "react-map-gl";
import React from "react";
import styled from "styled-components";

interface NavControllerProps extends NavigationControlProps {}

const StyledNav = styled.div`
  position: absolute;
  bottom: 3rem;
  z-index: 1;
`;

const NavController: React.FC<NavControllerProps> = ({ onViewportChange }) => {
  return (
    <>
      <StyledNav>
        <NavigationControl onViewportChange={onViewportChange} />
      </StyledNav>
    </>
  );
};

export default NavController;
