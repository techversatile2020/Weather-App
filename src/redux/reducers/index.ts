import { combineReducers } from "@reduxjs/toolkit";

import authSlice, {
  logout,
  setAuthentication,
  setToken,
  setUser,
  updateUser,
} from "./auth.slice";
// import themeSlice, { setTheme } from "./theme.slice";

export const rootReducer = combineReducers({
//   theme: themeSlice,
  auth: authSlice,
});

// export { setTheme };

export { logout, setAuthentication, setToken, setUser, updateUser };
