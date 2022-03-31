import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { IServer } from "api/types";
import orderBy from "lodash.orderby";

interface IServerState extends IServer {
  id: number;
}

export type SortDir = "asc" | "desc";
export type SortType = "name" | "distance" | "id";

interface InitialState {
  servers: IServerState[];
  isLoading: boolean;
  error: string;
  sort: {
    dir: SortDir;
    sortType: SortType | null;
  };
}

const initialState: InitialState = {
  servers: [],
  isLoading: false,
  error: "",
  sort: {
    dir: "asc",
    sortType: null,
  },
};

export const slice = createSlice({
  name: "servers",
  initialState,
  reducers: {
    setServersData: (state, action: PayloadAction<IServer[]>) => {
      const serversParsed = action.payload.map((el) => {
        return {
          ...el,
          id: parseInt(el.name.split("#")[1]),
          name: el.name.split("#")[0].trim(),
        };
      });

      state.servers = serversParsed;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setSort: (state, action: PayloadAction<SortType>) => {
      const sortType = action.payload;
      const currentServers = current(state.servers);

      if (state.sort.sortType === sortType) {
        state.servers = orderBy(
          currentServers,
          sortType,
          state.sort.dir === "asc" ? "desc" : "asc"
        );

        state.sort.dir = state.sort.dir === "asc" ? "desc" : "asc";
      } else {
        const dir = sortType === "name" ? "asc" : "desc";
        state.servers = orderBy(currentServers, sortType, dir);

        state.sort.sortType = sortType;
        state.sort.dir = dir;
      }
    },
  },
});

export default slice.reducer;
