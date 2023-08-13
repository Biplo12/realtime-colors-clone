import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

import { IDialogReducerInterface } from '@/interfaces';

const initialState: IDialogReducerInterface = {
  openedDialog: null,
};

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    openDialog(state, action) {
      state.openedDialog = action.payload;
    },
    closeDialog(state) {
      state.openedDialog = null;
    },
  },
});

const { actions, reducer } = dialogSlice;
export const { openDialog, closeDialog } = actions;
export const selectDialog = (state: RootState) => state.dialog;
export default reducer;
