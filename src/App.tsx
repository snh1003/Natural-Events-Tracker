import React from "react";
import { DeckGlMapbox } from "./Component/DeckGLMapbox";
import MainWrapper from "./UI/MainWrapper";
import TopWrapper from "./UI/TopWrapper";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainWrapper width={"100vw"} height={"100vh"}>
        <TopWrapper />
        <DeckGlMapbox />
      </MainWrapper>
    </>
  );
};

export default App;
