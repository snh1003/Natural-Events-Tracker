import styled from "styled-components";
import React from "react";

const StyledThumb = styled.div`
  height: 100%;
  line-height: 2.5rem;
  width: 6rem;
  text-align: center;
  font-size: 1rem;
  background-color: #000;
  color: #fff;
  cursor: grab;
`;

const Thumb = (
  props: object,
  state: { index: number; value: number | number[]; valueNow: number }
) => <StyledThumb {...props}>{state.valueNow} days</StyledThumb>;

export default Thumb;
