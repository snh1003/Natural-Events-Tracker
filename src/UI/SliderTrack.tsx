import styled from "styled-components";
import React from "react";

const StyledTrack = styled.div<{ index: number }>`
  top: 0;
  bottom: 0;
  background: ${({ index }) => (index === 1 ? "#ddd" : "#ffcc00")};
  border-radius: 999px;
`;

const Track = (
  props: object,
  state: { index: number; value: number | number[] }
) => <StyledTrack {...props} index={state.index} />;
export default Track;
