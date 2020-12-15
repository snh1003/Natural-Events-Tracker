import React from "react";
import styled, { keyframes } from "styled-components";

const StyleForm = styled.article`
  width: 100%;
`;

const flicker = keyframes`
  0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
    opacity: .99;
    text-shadow: -1px -1px 0 rgba(#fff, .4), 1px -1px 0 rgba(#fff, .4), -1px 1px 0 rgba(#fff, .4), 1px 1px 0 rgba(#fff, .4), 0 -2px 8px, 0 0 2px, 0 0 5px #ff7e00, 0 0 15px #ff4444, 0 0 2px #ff7e00, 0 2px 3px #000;
  }
  20%, 22%, 63%, 64%, 65%, 70% {
    opacity: 0.4;
    text-shadow: none;
  }
`;

const StyledTitle = styled.h1`
  font-size: 4rem;
  text-align: center;
  color: ${props => props.theme.main.bright};
  letter-spacing: -0.1px;
  line-height: 1;
`;

const StyledSpan = styled.span`
  color: ${props => props.theme.main.yellow};
  width: 100%;
  z-index: 5;
  text-shadow: none;
  animation: ${flicker} 3s linear infinite;
`;

// @media only screen and (min-width: ${props => props.theme.Platform.tablet}) {
//     width: ${props => props.theme.Platform.tablet};
// }
const TopWrapper: React.FC = () => {
  return (
    <StyleForm>
      <StyledTitle>
        {" "}
        N<StyledSpan>A</StyledSpan>TURAL EVENTS TR<StyledSpan>A</StyledSpan>CKER
      </StyledTitle>
    </StyleForm>
  );
};

export default TopWrapper;
