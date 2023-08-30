import {createSelector, createSlice} from '@reduxjs/toolkit';
export interface IAppReducer {
  appFontFamily: string;
  appLanguage: string;
}

const slice = createSlice({
  name: 'AppReducer',
  initialState: {
    appFontFamily: 'Inter',
    appLanguage: 'en',
  } as IAppReducer,
  reducers: {
    setFontFamily(state, action) {
      state.appFontFamily = action.payload;
    },
    setAppLanguage(state, action) {
      state.appLanguage = action.payload;
    },
  },
});

const selectState = state => state.AppReducer;

export const selectAppFontFamily = createSelector(
  selectState,
  state => state.appFontFamily,
);

export const {setAppLanguage, setFontFamily} = slice.actions;
export default slice.reducer;
