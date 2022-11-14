import SplashScreenReducer, {
  ISplashScreenReducer,
} from "./SplashScreenReducer";

import { configureStore } from "@reduxjs/toolkit";

export interface IRooReducers {
  SplashScreenReducer: ISplashScreenReducer;
}
export const rootReducers = configureStore({
  reducer: {
    SplashScreenReducer: SplashScreenReducer,
  },
});
