import React from "react";
import "./style.css";
import { deleteTeamRequest, getTeamsRequest, createTeamRequest } from "./middleware";
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
  team: Team;
};
type Actions = {
  //deleteTeam: (id:string)=>void
  deleteTeam(id: string): void;
  save(): void;
  inputChange(name: string, value: string): void;
};

export function TeamsTable(props: Props & Actions) {
  return (
    <form
      id="editForm"
      action=""
      method="post"
      className={props.loading ? "loading-mask" : ""}
      onSubmit={(e) => {
        e.preventDefault();
        props.save();
      }}
    >
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
                  <a
                    className="link-btn"
                    onClick={() => {
                      props.deleteTeam(id);
                    }}
                  >
                    ✖
                  </a>
                  <a className="link-btn">&#9998;</a>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                name="promotion"
                placeholder={"Enter promotion"}
                required
                value={props.team.promotion}
                onChange={(e) => {
                  props.inputChange("promotion", e.target.value);
                }}
              />
            </td>
            <td>
              <input
                type="text"
                name="members"
                placeholder={"Enter members"}
                required
                value={props.team.members}
                onChange={(e) => {
                  props.inputChange("members", e.target.value);
                }}
              />
            </td>
            <td>
              <input
                type="text"
                name="name"
                placeholder={"Enter project name"}
                required
                value={props.team.name}
                onChange={(e) => {
                  props.inputChange("name", e.target.value);
                }}
              />
            </td>
            <td>
              <input
                type="text"
                name="url"
                placeholder={"project URL"}
                required
                value={props.team.url}
                onChange={(e) => {
                  props.inputChange("url", e.target.value);
                }}
              />
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

type WrapperProps = {};
type State = {
  loading: boolean;
  teams: Team[];
  team: Team;
};

export class TeamsTableWrapper extends React.Component<WrapperProps, State> {
  constructor(props: WrapperProps) {
    super(props);
    this.state = {
      loading: true,
      teams: [],
      team: {
        id: "",
        name: "",
        promotion: "",
        members: "",
        url: ""
      }
    };
  }

  componentDidMount(): void {
    this.loadTeams();
  }

  async loadTeams() {
    const teams = await getTeamsRequest();
    this.setState({
      loading: false,
      teams: teams
    });
  }

  render() {
    return (
      <TeamsTable
        teams={this.state.teams}
        loading={this.state.loading}
        team={this.state.team}
        deleteTeam={async (teamId) => {
          console.warn("TODO pls remove this team", teamId);
          const status = await deleteTeamRequest(teamId);
          console.warn("status", status);
          this.loadTeams();
        }}
        save={async () => {
          const team = this.state.team;

          const status = await createTeamRequest(team);
          console.warn("create", status);
          this.loadTeams();
        }}
        inputChange={(name: string, value: string) => {
          //this.state.team.promotion =value ; //nok
          this.setState((state) => {
            const team = { ...state.team };
            team[name] = value;
            return {
              team
            };
          });
        }}
      />
    );
  }
}
