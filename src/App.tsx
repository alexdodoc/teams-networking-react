import React from "react";
import "./App.css";
import { AppFooter } from "./footer/components";
import Header from "./header";
import { ContentWrapper } from "./main/components";

function App() {
  return (
    <React.Fragment>
      <Header />
      <ContentWrapper />
      {/* <footer>...ceva text</footer> */}
      <AppFooter />
    </React.Fragment>
  );
}

export default App;
