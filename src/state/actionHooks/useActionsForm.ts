import { useMemo } from "react";
import { slice } from "state/reducers/form";
import { bindActionCreators } from "redux";
import { useStateDispatch } from "state";

const useActionsForm = () => {
  const { actions } = slice;
  const dispatch = useStateDispatch();

  return useMemo(
    () => bindActionCreators(actions, dispatch),
    [actions, dispatch]
  );
};

export default useActionsForm;
