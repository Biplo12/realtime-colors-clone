import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

import IGlobalReducerInterface from '@/interfaces/IGlobalReducerInterface';

const randomColor = (isDarkMode: boolean) => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 30) + 50;
  let lightness = Math.floor(Math.random() * 20) + 40;

  if (isDarkMode) {
    lightness = Math.floor(Math.random() * 20) + 40 - 25;
  } else {
    lightness = Math.floor(Math.random() * 20) + 40 + 25;
  }

  const textColor = isDarkMode ? '#fff' : '#000';

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

  return {
    backgroundColor: hslToHex(
      (hue + 180) % 360,
      saturation,
      isDarkMode ? 10 : 90
    ),
    textColor,
    primaryColor: hslToHex(hue, saturation, lightness),
    secondaryColor: hslToHex((hue + 180) % 360, saturation, lightness),
    accentColor: hslToHex((hue + 60) % 360, saturation, lightness),
  };
};

const initialState: IGlobalReducerInterface = {
  colors: {
    textColor: {
      color: null,
      isLocked: false,
    },
    backgroundColor: {
      color: null,
      isLocked: false,
    },
    primaryColor: {
      color: null,
      isLocked: false,
    },
    secondaryColor: {
      color: null,
      isLocked: false,
    },
    accentColor: {
      color: null,
      isLocked: false,
    },
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

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      for (const key in state.colors) {
        state.colors[key as keyof typeof state.colors].color = randomColor(
          state.isDarkMode
        )[key as keyof typeof state.colors];
      }
      state.lastActions.push({
        type: 'toggleDarkMode',
        value: { ...state.colors, isDarkMode: state.isDarkMode },
      });
    },
    setColor: (state, action) => {
      state.colors[action.payload.label as keyof typeof state.colors].color =
        action.payload.color;
      state.lastActions.push({
        type: action.payload.label,
        value: action.payload.color,
      });
    },
    randomizeColors: (state) => {
      state.colors.textColor.color = randomColor(state.isDarkMode).textColor;
      state.colors.backgroundColor.color = randomColor(
        state.isDarkMode
      ).backgroundColor;
      state.colors.primaryColor.color = randomColor(
        state.isDarkMode
      ).primaryColor;
      state.colors.secondaryColor.color = randomColor(
        state.isDarkMode
      ).secondaryColor;
      state.colors.accentColor.color = randomColor(
        state.isDarkMode
      ).accentColor;
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
    changeLockStatus: (state, action) => {
      state.colors[action.payload as keyof typeof state.colors].isLocked =
        !state.colors[action.payload as keyof typeof state.colors].isLocked;
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
  changeLockStatus,
} = globalSlice.actions;
export default globalSlice.reducer;
