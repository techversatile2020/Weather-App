import { combineReducers } from "@reduxjs/toolkit";

import authSlice, {
  logout,
  setAuthentication,
  setToken,
  setUser,
  updateUser,
} from "./auth.slice";
import homeSlice, { setCityForecastData } from "./home.slice";

export const rootReducer = combineReducers({
  //   theme: themeSlice,
  auth: authSlice,
  home: homeSlice,
});

// export { setTheme };

// Auth
export { logout, setAuthentication, setToken, setUser, updateUser };

// Home
export { setCityForecastData };
