import "./style.css";
type Team = {
  id: string;
  name: string;
  promotion: string;
  members: string;
  url: string;
};
type Props = {
  loading: boolean;
  teams: Team[];
};
export function TeamsTable(props: Props) {
  return (
    <form id="editForm" action="" method="post" className={props.loading ? "loading-mask" : ""}>
      <table>
        <colgroup>
          <col span={1} style={{ width: "40px" }} />
          <col span={1} style={{ width: "125px" }} />
          <col span={1} />
          <col span={1} />
          <col span={1} />
          <col span={1} style={{ width: "80px" }} />
        </colgroup>
        <thead>
          <tr>
            <th>
              <input type="checkbox" name="selectAll" id="selectAll" />
            </th>
            <th>Promotion</th>
            <th>Members</th>
            <th>Project Name</th>
            <th>Project URL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.teams.map(({ id, url, promotion, members, name }) => {
            let displayURL = url;
            if (url.startsWith("https://")) {
              displayURL = url.substring(8);
            }
            return (
              <tr key={id}>
                <td>
                  <input type="checkbox" name="selected" value={id} />
                </td>
                <td>{promotion}</td>
                <td>{members}</td>
                <td>{name}</td>
                <td>
                  <a href={url} target="_blank">
                    {displayURL}
                    {url}
                  </a>
                </td>
                <td>
                  <a data-id={id} className="link-btn remove-btn">
                    ✖
                  </a>
                  <a data-id={id} className="link-btn edit-btn">
                    &#9998;
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <input type="text" name="promotion" id="promotion" placeholder={"Enter promotion"} required />
            </td>
            <td>
              <input type="text" name="members" id="members" placeholder={"Enter members"} required />
            </td>
            <td>
              <input type="text" name="name" id="name" placeholder={"Enter project name"} required />
            </td>
            <td>
              <input type="text" name="url" id="url" placeholder={"project URL"} required />
            </td>
            <td>
              <button type="submit">💾</button>
              <button type="reset">✖</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  );
}

export function TeamsTableWrapper() {
  const teams = [
    {
      id: "toze8j1610313009673",
      promotion: "html",
      members: "Nicolae Matei, HTML",
      name: "Web Presentation",
      url: "https://github.com/nmatei/web-intro-presentation"
    },
    {
      id: "ezabnf1630345987541",
      promotion: "css",
      members: "Nicolae",
      name: "Names",
      url: "https://github.com/nmatei/nmatei.github.io"
    },
    {
      id: "86mq81630347385708",
      promotion: "js",
      members: "Matei, Andrei",
      name: "JS/HTML/CSS Quiz",
      url: "https://github.com/nmatei/simple-quiz-app"
    }
  ];
  // return TeamsTable({
  //   teams: teams
  // });
  return (
    <>
      <TeamsTable teams={[]} loading={true} />
      <TeamsTable teams={teams} loading={false} />
    </>
  );
}