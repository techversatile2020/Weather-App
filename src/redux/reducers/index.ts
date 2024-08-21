import { combineReducers } from "@reduxjs/toolkit";

import homeSlice, { setCityForecastData } from "./home.slice";

export const rootReducer = combineReducers({
  //   theme: themeSlice,

  home: homeSlice,
});

// export { setTheme };


// Home
export { setCityForecastData };
