import { getServers } from "api/servers";
import { useEffect } from "react";
import { useStateSelector } from "state";
import useActionsServers from "state/actionHooks/useActionsServers";
import styled from "styled-components";
import { palette } from "utils/theme";
import { ServerItem } from "./ServerItem";

const Div = styled.div`
  overflow-y: auto;
  display: grid;
  grid-gap: 20px;
  padding-right: 10px;
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: ${palette.stroke};
  }

  ::-webkit-scrollbar-thumb {
    background: ${palette.cadetBlue};
  }

  .loading-label {
    color: ${palette.cadetBlue};
    text-align: center;
  }
  .error-label {
    color: ${palette.error};
    text-align: center;
  }
`;

export const ItemsContainer = () => {
  const { servers, isLoading, error } = useStateSelector(
    ({ servers }) => servers
  );
  const { setError, setIsLoading, setServersData } = useActionsServers();

  useEffect(() => {
    setIsLoading(true);
    getServers()
      .then((res) => setServersData(res))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [setError, setIsLoading, setServersData]);

  return (
    <Div>
      {isLoading && <div className="loading-label">Loading...</div>}
      {error && <div className="error-label">{error}</div>}
      {servers.map((el) => (
        <ServerItem
          key={el.name + el.id + el.distance}
          id={el.id}
          name={el.name}
          distance={el.distance}
        />
      ))}
    </Div>
  );
};
