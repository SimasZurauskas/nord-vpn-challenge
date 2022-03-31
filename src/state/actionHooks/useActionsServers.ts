import { useMemo } from "react";
import { slice } from "state/reducers/servers";
import { bindActionCreators } from "redux";
import { useStateDispatch } from "state";

const useActionsServers = () => {
  const { actions } = slice;
  const dispatch = useStateDispatch();

  return useMemo(
    () => bindActionCreators(actions, dispatch),
    [actions, dispatch]
  );
};

export default useActionsServers;
