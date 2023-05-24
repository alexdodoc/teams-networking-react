import { Page } from "../main/models";
import "./menu.css";

type Props = {
  activePage: Page;
};
type Actions = {
  setActive(page: Page): void;
};

export function MainMenu(props: Props & Actions) {
  const active = props.activePage;
  return (
    <ul id="top-menu-bar">
      <li>
        <a
          href="#"
          className={active === "home" ? "active" : ""}
          onClick={() => {
            props.setActive("home");
          }}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#"
          className={active === "skills" ? "active" : ""}
          onClick={() => {
            props.setActive("skills");
          }}
        >
          Skills
        </a>
      </li>
      <li>
        <a
          href="#"
          className={active === "teams" ? "active" : ""}
          onClick={() => {
            props.setActive("teams");
          }}
        >
          Teams
        </a>
      </li>
      <li>
        <a
          href="#"
          className={active === "languages" ? "active" : ""}
          onClick={() => {
            props.setActive("languages");
          }}
        >
          Languages
        </a>
      </li>
    </ul>
  );
}
