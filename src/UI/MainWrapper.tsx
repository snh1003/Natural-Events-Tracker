import React from "react";
import styled from "styled-components";

interface mainWrapperProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
}
// ${({ width }) => width};
const StyleForm = styled.section<Pick<mainWrapperProps, "width" | "height">>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${props => props.theme.main.background};
`;

const MainWrapper: React.FC<mainWrapperProps> = ({
  children,
  width,
  height
}) => {
  return (
    <StyleForm width={width} height={height}>
      {children}
    </StyleForm>
  );
};

export default MainWrapper;
