import React from "react";
import logo from "./poza.jpg";
import "./App.css";

function AppHeader() {
  return (
    <header>
      <div id="header-wrapper">
        <div id="my-picture">
          <img src={logo} alt="Selfie" height="100" />
        </div>
        <div id="info-details">
          <h1>Dodoc Alexandru</h1>
          <h2 id="job-title">Programator @ INDUSTRIAL SOFTWARE</h2>
        </div>
      </div>
      <MainMenu />
    </header>
  );
}

function MainMenu() {
  return (
    <ul id="top-menu-bar">
      <li>
        <a href="#" data-page="home">
          Home
        </a>
      </li>
      <li>
        <a href="#" data-page="skills">
          Skills
        </a>
      </li>
      <li>
        <a href="#" data-page="projects">
          Projects
        </a>
      </li>
      <li>
        <a href="#" data-page="languages">
          Languages
        </a>
      </li>
    </ul>
  );
}
function SideMenu() {
  return (
    <div id="side-menu">
      <section>M2</section>
      <section id="section-email">
        <form action="" method="get">
          <h2>Contact me</h2>
          <div>
            <label htmlFor="userName">Name</label>
            <input type="text" name="Name" id="userName" required />
          </div>
          <div>
            <label htmlFor="userEmail">Email</label>
            <input type="email" name="email" id="userEmail" placeholder="example@me.com" required />
          </div>
          <div>
            <textarea name="message" placeholder="Enter message here..."></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}

function AppFooter() {
  return (
    <footer>
      <a href="https://www.linkedin.com/in/alexandru-dodoc-287114a0/">LinkedIn</a>
    </footer>
  );
}

function ContentWrapper() {
  return (
    <section id="content">
      <SideMenu />
      <div id="main">
        <div className="page" id="home">
          HOME content
        </div>
        <div className="page" id="skills">
          <h2>Skills & Endorcements</h2>
          <ul></ul>
        </div>
        <div className="page" id="projects">
          Projects ...
        </div>
        <div className="page" id="languages">
          Languages ...
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <React.Fragment>
      <AppHeader />
      <ContentWrapper />
      <AppFooter />
    </React.Fragment>
  );
}

function App_old() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
