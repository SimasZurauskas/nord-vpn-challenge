import { getToken } from "./utils";

export const baseURL = "https://playground.tesonet.lt/v1";

export const getAuthHeaders = () => {
  const headers = {};
  const token = getToken();
  if (token) {
    return { Authorization: `Bearer ${token}` };
  }

  return headers;
};
