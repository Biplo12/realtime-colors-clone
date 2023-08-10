import { createSlice } from '@reduxjs/toolkit';
import IGlobalReducerInterface from 'interfaces/IGlobalReducerInterface';
import { RootState } from 'store/store';

const initialState: IGlobalReducerInterface = {
  colors: {
    textColor: '#fff',
    backgroundColor: '#000',
    primaryColor: '#fff',
    secondaryColor: '#fff',
    accentColor: '#fff',
  },
  isDarkMode: true,
  lastActions: [],
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    setTextColor: (state, action) => {
      state.colors.textColor = action.payload;
    },
    setPrimaryColor: (state, action) => {
      state.colors.primaryColor = action.payload;
    },
    setSecondaryColor: (state, action) => {
      state.colors.secondaryColor = action.payload;
    },
    setAccentColor: (state, action) => {
      state.colors.accentColor = action.payload;
    },
    setBackgroundColor: (state, action) => {
      state.colors.backgroundColor = action.payload;
    },
    randomizeColors: (state) => {
      state.colors.primaryColor = `#${Math.floor(
        Math.random() * 16777215
      ).toString(16)}`;
      state.colors.secondaryColor = `#${Math.floor(
        Math.random() * 16777215
      ).toString(16)}`;
      state.colors.accentColor = `#${Math.floor(
        Math.random() * 16777215
      ).toString(16)}`;
      state.colors.backgroundColor = `#${Math.floor(
        Math.random() * 16777215
      ).toString(16)}`;
    },
    undoLastAction: (state) => {
      state.lastActions.pop();
    },
    redoLastAction: (state) => {
      state.lastActions.push(state.lastActions[state.lastActions.length - 1]);
    },
  },
});

export const selectUser = (state: RootState) => state.global;
export const {
  toggleDarkMode,
  setTextColor,
  setPrimaryColor,
  setSecondaryColor,
  setAccentColor,
  setBackgroundColor,
  randomizeColors,
} = globalSlice.actions;
export default globalSlice.reducer;
