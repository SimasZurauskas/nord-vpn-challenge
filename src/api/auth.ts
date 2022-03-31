import { baseURL } from "./client";

/******************
//  LOGIN
*******************/

type MakeLoginResponse = Promise<{ token: string }>;

type MakeLoginParameters = {
  username: string;
  password: string;
};

type MakeLogin = (parameters: MakeLoginParameters) => MakeLoginResponse;

export const makeLogin: MakeLogin = async (parameters) => {
  const response = await fetch(`${baseURL}/tokens`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(parameters),
  });

  if (response.status !== 200) {
    const res = await response.json();
    throw new Error(res.message);
  }
  return response.json();
};
