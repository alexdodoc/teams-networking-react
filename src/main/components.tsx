import { SideMenu } from "../menu/SideMenu";
import { TeamsTable } from "../teams/TeamsTable";

export function ContentWrapper() {
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
        <div className="page" id="teams" style={{ display: "block" }}>
          <TeamsTable />
        </div>
        <div className="page" id="languages">
          Languages ...
        </div>
      </div>
    </section>
  );
}
