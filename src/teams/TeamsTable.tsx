import React from "react";
import "./style.css";
import { deleteTeamRequest, getTeamsRequest, createTeamRequest, updateTeamRequest } from "./middleware";
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
  startEdit(team: Team): void;
  reset(): void;
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
      onReset={() => {
        props.reset();
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
          {props.teams.map((team) => {
            const { id, url, promotion, members, name } = team;
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
                  <a
                    className="link-btn"
                    onClick={() => {
                      props.startEdit(team);
                    }}
                  >
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

const emptyTeam: Team = {
  id: "",
  name: "",
  promotion: "",
  members: "",
  url: ""
};

function getEmptyTeam(): Team {
  return {
    id: "",
    name: "",
    promotion: "",
    members: "",
    url: ""
  };
}

export class TeamsTableWrapper extends React.Component<WrapperProps, State> {
  constructor(props: WrapperProps) {
    super(props);
    this.state = {
      loading: true,
      teams: [],
      team: getEmptyTeam()
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
        reset={() => {
          this.setState({ team: getEmptyTeam() });
        }}
        deleteTeam={async (teamId) => {
          const status = await deleteTeamRequest(teamId);
          console.warn("status", status.success);
          this.loadTeams();
        }}
        save={async () => {
          this.setState({ loading: true });
          const team = this.state.team;
          let status;
          if (team.id) {
            status = await updateTeamRequest(team);
          } else {
            status = await createTeamRequest(team);
          }

          console.warn("save", status, team);
          await this.loadTeams();
          this.setState({ team: getEmptyTeam() });
        }}
        startEdit={(team) => {
          console.warn("start edit", team);
          this.setState({ team });
        }}
        inputChange={(name: string, value: string) => {
          //this.state.team.promotion =value ; //nok
          this.setState((state) => ({
            team: {
              ...state.team,
              [name]: value
            }
          }));
        }}
      />
    );
  }
}
