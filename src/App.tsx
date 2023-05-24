import React, { useState } from "react";
import "./App.css";
import { AppFooter } from "./footer/components";
import Header from "./header";
import { ContentWrapper } from "./main/components";
import { Page } from "./main/models";

function App() {
  let [activePage, setActivePage] = useState<Page>("home");
  return (
    <React.Fragment>
      <Header setActive={setActivePage} activePage={activePage} />
      <ContentWrapper activePage={activePage} />
      <AppFooter />
    </React.Fragment>
  );
}

export default App;
