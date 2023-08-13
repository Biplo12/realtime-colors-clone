import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import dialogSlice from 'state/dialogSlice';
import globalSlice from 'state/globalSlice';

export const store = configureStore({
  reducer: {
    global: globalSlice,
    dialog: dialogSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
