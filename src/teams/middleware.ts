import { Team } from "./models";

export function getTeamsRequest(): Promise<Team[]> {
  return fetch("http://localhost:3000/teams-json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then((r) => {
    return r.json();
  });
}

export function createTeamRequest(team: Team): Promise<{ succes: boolean; id: string }> {
  return fetch("http://localhost:3000/teams-json/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(team)
  }).then((r) => r.json());
}

export function deleteTeamRequest(
  id: string,
  callback?: (status: { success: boolean }) => void
): Promise<{ success: boolean }> {
  return fetch("http://localhost:3000/teams-json/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id }) // nume cheie = nume var valoare
  })
    .then((r) => r.json())
    .then((status) => {
      console.warn("before remove ", status);
      if (typeof callback === "function") {
        callback(status);
      }
      return status;
    });
}

export function updateTeamRequest(team: Team) {
  return fetch("http://localhost:3000/teams-json/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(team)
  }).then((r) => r.json());
}
