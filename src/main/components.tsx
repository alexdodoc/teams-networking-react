import { useState } from "react";
import { SideMenu } from "../menu/SideMenu";
import { TeamsTableWrapper } from "../teams/TeamsTable";
import { Page } from "./models";

type Props = {
  activePage: Page;
};
type Actions = {};

export function ContentWrapper(props: Props & Actions) {
  //let search = "JS";
  const [search, setSearch] = useState("");

  const page = props.activePage;
  return (
    <section id="content">
      <SideMenu />
      <div id="main">
        <div className="page" style={{ display: page === "home" ? "block" : "" }}>
          HOME content
        </div>
        <div className="page" style={{ display: page === "skills" ? "block" : "" }}>
          <h2>Skills & Endorcements</h2>
          <ul></ul>
        </div>
        <div className="page" style={{ display: page === "teams" ? "block" : "" }}>
          <input
            type="search"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <span>🔍</span>
          <TeamsTableWrapper search={search} />
        </div>
        <div className="page" style={{ display: page === "languages" ? "block" : "" }}>
          Languages ...
        </div>
      </div>
    </section>
  );
}
