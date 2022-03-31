import { baseURL, getAuthHeaders } from "./client";
import { IServer } from "./types";
import { makeLogout } from "./utils";

/******************
// GET SERVERS LIST
*******************/

type GetServersResponse = Promise<IServer[]>;

type GetServers = () => GetServersResponse;

export const getServers: GetServers = async () => {
  const response = await fetch(`${baseURL}/servers`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...getAuthHeaders(),
    },
  });

  if (response.status === 401) {
    makeLogout();
    return;
  }
  return response.json();
};
