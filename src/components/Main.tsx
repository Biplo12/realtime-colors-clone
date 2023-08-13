import React from 'react';
import { useAppSelector } from 'store/store-hooks';

import useOnLoad from '@/hooks/useOnload';

import DialogController from '@/components/Dialogs/DialogController';
import Hero from '@/components/Hero/Hero';
import ToolBar from '@/components/ToolBar/ToolBar';
const Main: React.FC = (): JSX.Element => {
  const { colors, handleCloseColorPickers } = useOnLoad();
  const isDialogActive =
    useAppSelector((state) => state.dialog.openedDialog) !== null;
  return (
    <div
      className='flex h-screen flex-col items-center justify-center'
      style={{
        backgroundColor: colors.backgroundColor.color as string,
        color: colors.textColor.color as string,
      }}
    >
      {isDialogActive && <DialogController />}
      <ToolBar />
      <div
        className='flex h-full w-full flex-col items-center justify-center'
        onClick={handleCloseColorPickers}
      >
        <Hero />
      </div>
    </div>
  );
};
export default Main;
