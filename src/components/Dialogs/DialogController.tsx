import React from 'react';
import { closeDialog } from 'state/dialogSlice';
import { useAppDispatch, useAppSelector } from 'store/store-hooks';

import ExportDialog from '@/components/Dialogs/ExportDialog/ExportDialog';
const DialogController: React.FC = (): JSX.Element => {
  const openedDialog = useAppSelector((state) => state.dialog.openedDialog);
  const dispatch = useAppDispatch();
  const handleCloseDialog = () => {
    dispatch(closeDialog());
  };
  const openCorrectDialog = () => {
    switch (openedDialog) {
      case 'EXPORT_DIALOG':
        return <ExportDialog />;
      default:
        return;
    }
  };
  return (
    <>
      <div
        className='fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50'
        onClick={handleCloseDialog}
      />
      {openCorrectDialog()}
    </>
  );
};
export default DialogController;
