import { Page } from "../main/models";
import { MainMenu } from "../menu/MainMenu";
import logo from "./poza.jpg";
import "./style.css";

type Props = {};
type Actions = {
  setActive(page: Page): void;
};
// interface Props {}
// interface Actions {}

export default function AppHeader(props: Props & Actions) {
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
      <MainMenu setActive={props.setActive} />
    </header>
  );
}
