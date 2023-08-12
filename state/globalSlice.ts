import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

import IGlobalReducerInterface from '@/interfaces/IGlobalReducerInterface';

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
      const { isDarkMode } = state;

      for (const key in state.colors) {
        if (!state.colors[key as keyof typeof state.colors].isLocked) {
          const color =
            randomColor(isDarkMode)[key as keyof typeof state.colors];
          state.colors[key as keyof typeof state.colors].color = color;
        }
      }
      state.lastActions.push({
        type: 'toggleDarkMode',
        value: { ...state.colors, isDarkMode },
      });
    },
    setColor: (state, action) => {
      const { label, color } = action.payload;
      state.colors[label as keyof typeof state.colors].color = color;
      state.lastActions.push({ type: label, value: color });
    },
    randomizeColors: (state) => {
      const isDarkMode = state.isDarkMode;
      for (const key in state.colors) {
        if (!state.colors[key as keyof typeof state.colors].isLocked) {
          const color =
            randomColor(isDarkMode)[key as keyof typeof state.colors];
          state.colors[key as keyof typeof state.colors].color = color;
        }
      }
    },
    undoLastAction: (state) => {
      state.lastActions.pop();
    },
    redoLastAction: (state) => {
      state.lastActions.push(state.lastActions[state.lastActions.length - 1]);
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
} = actions;
export const selectGlobal = (state: RootState) => state.global;
export default reducer;

const hslToHex = (h: number, s: number, l: number) => {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};

const randomColor = (isDarkMode: boolean) => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 30) + 50;
  let lightness = Math.floor(Math.random() * 20) + 40;

  if (isDarkMode) {
    lightness = Math.floor(Math.random() * 20) + 40 - 25;
  } else {
    lightness = Math.floor(Math.random() * 20) + 40 + 25;
  }

  return {
    backgroundColor: hslToHex(
      (hue + 180) % 360,
      saturation,
      isDarkMode ? 10 : 90
    ),
    textColor: isDarkMode ? '#fff' : '#000',
    primaryColor: hslToHex(hue, saturation, lightness),
    secondaryColor: hslToHex((hue + 180) % 360, saturation, lightness),
    accentColor: hslToHex((hue + 60) % 360, saturation, lightness),
  };
};
