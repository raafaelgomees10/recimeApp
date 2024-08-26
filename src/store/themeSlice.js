import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setInitialTheme(state) {
      if (typeof window !== "undefined") {
        state.isDarkMode =
          localStorage.getItem("recime:isDarkMode") === "true" ? true : false;
      }
    },
    toggleTheme(state) {
      state.isDarkMode = !state.isDarkMode;
      if (typeof window !== "undefined") {
        localStorage.setItem("recime:isDarkMode", state.isDarkMode);
      }
    },
  },
});

export const { toggleTheme, setInitialTheme } = themeSlice.actions;

const themeReducer = themeSlice.reducer;

export default themeReducer;
