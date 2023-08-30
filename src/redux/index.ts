import AppReducer from './app.reducer';
import {configureStore} from '@reduxjs/toolkit';

export const rootReducers = configureStore({
  reducer: {AppReducer},
});
