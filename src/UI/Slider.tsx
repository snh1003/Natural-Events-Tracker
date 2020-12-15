import ReactSlider, { ReactSliderProps } from "react-slider";
import styled from "styled-components";
import React from "react";
import Thumb from "./SliderThumb";
import Track from "./SliderTrack";

interface SliderProps extends ReactSliderProps {
  label?: string;
}
const StyledSlider = styled(ReactSlider)`
  width: 90%;
  height: 2.5rem;
  margin: 0 auto 2rem auto;
`;

const Slider: React.FC<SliderProps> = ({ onAfterChange, min, max }) => {
  return (
    <>
      <StyledSlider
        onAfterChange={onAfterChange}
        min={min}
        max={max}
        renderTrack={Track}
        renderThumb={Thumb}
      />
    </>
  );
};

export default Slider;
