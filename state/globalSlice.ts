import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

import IGlobalReducerInterface from '@/interfaces/IGlobalReducerInterface';
import { randomColor } from '@/utils/colorUtils';

const initialState: IGlobalReducerInterface = {
  colors: {
    textColor: { color: null, isLocked: false },
    backgroundColor: { color: null, isLocked: false },
    primaryColor: { color: null, isLocked: false },
    secondaryColor: { color: null, isLocked: false },
    accentColor: { color: null, isLocked: false },
  },
  colorPickers: {
    textColor: false,
    backgroundColor: false,
    primaryColor: false,
    secondaryColor: false,
    accentColor: false,
  },
  isDarkMode: false,
  lastActions: [],
};

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      const isDarkMode = state.isDarkMode;
      const randomColors = randomColor(isDarkMode);
      for (const key in state.colors) {
        if (!state.colors[key as keyof typeof state.colors].isLocked) {
          state.colors[key as keyof typeof state.colors].color =
            randomColors[key as keyof typeof state.colors];
        }
      }
    },
    setColor: (state, action) => {
      const { label, color } = action.payload || {};
      state.colors[label as keyof typeof state.colors].color = color;
    },
    setColors: (state, action) => {
      state.colors = action.payload;
    },
    randomizeColors: (state) => {
      const isDarkMode = state.isDarkMode;
      for (const key in state.colors) {
        if (!state.colors[key as keyof typeof state.colors].isLocked) {
          state.colors[key as keyof typeof state.colors].color =
            randomColor(isDarkMode)[key as keyof typeof state.colors];
        }
      }
      state.lastActions.push({
        type: 'randomizeColors',
        value: { ...state.colors },
      });
    },
    undoLastAction: (state) => {
      const lastAction = state.lastActions.pop();
      if (lastAction) {
        const previousColors = { ...state.colors };
        state.colors = lastAction.value;
        state.lastActions.push({
          type: 'undoLastAction',
          value: previousColors,
        });
      }
    },
    redoLastAction: (state) => {
      return state;
    },
    openColorPicker: (state, action) => {
      for (const key in state.colorPickers) {
        if (key === action.payload) continue;
        state.colorPickers[key as keyof typeof state.colorPickers] = false;
      }
      state.colorPickers[action.payload as keyof typeof state.colorPickers] =
        !state.colorPickers[action.payload as keyof typeof state.colorPickers];
    },
    closeColorPickers: (state) => {
      for (const key in state.colorPickers) {
        state.colorPickers[key as keyof typeof state.colorPickers] = false;
      }
    },
    changeLockStatus: (state, action) => {
      const colorKey = action.payload;
      state.colors[colorKey as keyof typeof state.colors].isLocked =
        !state.colors[colorKey as keyof typeof state.colors].isLocked;
    },
  },
});

const { actions, reducer } = colorSlice;
export const {
  toggleDarkMode,
  setColor,
  randomizeColors,
  undoLastAction,
  redoLastAction,
  openColorPicker,
  closeColorPickers,
  changeLockStatus,
  setColors,
} = actions;
export const selectGlobal = (state: RootState) => state.global;
export default reducer;
