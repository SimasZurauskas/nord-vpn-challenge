export const localStorageKey = "__nord_auth__";

export const makeLogout = () => {
  window.localStorage.removeItem(localStorageKey);
  window.location.href = "/auth";
};

export const getToken = () => {
  const data = window.localStorage.getItem(localStorageKey);
  if (!data) {
    return false;
  }
  const parsed = JSON.parse(data);
  return parsed.token as string;
};

export const getIsSignedIn = () => {
  const data = window.localStorage.getItem(localStorageKey);
  if (!data) {
    return false;
  }
  const parsed = JSON.parse(data);
  return !!parsed.token;
};

export const setToken = (token: string) => {
  window.localStorage.setItem(
    localStorageKey,
    JSON.stringify({
      token,
    })
  );
};
