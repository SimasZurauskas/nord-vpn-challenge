import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  userName: string;
  password: string;
  isValid: boolean;
  isLoading: boolean;
  error: string;
}

const initialState: InitialState = {
  userName: "",
  password: "",
  isValid: false,
  isLoading: false,
  error: "",
};

export const slice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      const string = action.payload.trim();
      state.userName = string;

      if (string.length > 3 && state.password.length > 3) {
        state.isValid = true;
      } else {
        state.isValid = false;
      }
    },
    setPassword: (state, action: PayloadAction<string>) => {
      const string = action.payload.trim();
      state.password = string;

      if (string.length > 3 && state.userName.length > 3) {
        state.isValid = true;
      } else {
        state.isValid = false;
      }
    },
    clearForm: (state) => {
      state.userName = "";
      state.password = "";
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export default slice.reducer;
