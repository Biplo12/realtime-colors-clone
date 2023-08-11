import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

import IGlobalReducerInterface from '@/interfaces/IGlobalReducerInterface';

const randomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const initialState: IGlobalReducerInterface = {
  colors: {
    textColor: null,
    backgroundColor: null,
    primaryColor: null,
    secondaryColor: null,
    accentColor: null,
  },
  colorPickers: {
    textColor: false,
    backgroundColor: false,
    primaryColor: false,
    secondaryColor: false,
    accentColor: false,
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
    setColor: (state, action) => {
      state.colors[action.payload.label as keyof typeof state.colors] =
        action.payload.color;
      state.lastActions.push({
        type: action.payload.label,
        value: action.payload.color,
      });
    },
    randomizeColors: (state) => {
      state.colors.textColor = randomColor();
      state.colors.primaryColor = randomColor();
      state.colors.secondaryColor = randomColor();
      state.colors.accentColor = randomColor();
      state.colors.backgroundColor = randomColor();
    },
    undoLastAction: (state) => {
      state.lastActions.pop();
    },
    redoLastAction: (state) => {
      state.lastActions.push(state.lastActions[state.lastActions.length - 1]);
    },
    openColorPicker: (state, action) => {
      for (const key in state.colorPickers) {
        state.colorPickers[key as keyof typeof state.colorPickers] = false;
      }
      state.colorPickers[action.payload as keyof typeof state.colorPickers] =
        true;
    },
    closeColorPickers: (state) => {
      for (const key in state.colorPickers) {
        state.colorPickers[key as keyof typeof state.colorPickers] = false;
      }
    },
  },
});

export const selectGlobal = (state: RootState) => state.global;
export const {
  toggleDarkMode,
  setColor,
  randomizeColors,
  undoLastAction,
  redoLastAction,
  openColorPicker,
  closeColorPickers,
} = globalSlice.actions;
export default globalSlice.reducer;
