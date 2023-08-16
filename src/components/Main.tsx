import React from 'react';
import { Toaster } from 'react-hot-toast';
import { useAppSelector } from 'store/store-hooks';

import useOnLoad from '@/hooks/useOnload';

import DialogController from '@/components/Dialogs/DialogController';
import Hero from '@/components/Hero/Hero';
const Main: React.FC = (): JSX.Element => {
  const { colors, handleCloseColorPickers } = useOnLoad();
  const isDialogActive =
    useAppSelector((state) => state.dialog.openedDialog) !== null;
  return (
    <>
      <div className='absolute left-0 top-0 z-50'>
        {/* <ToolBar /> */}
        <Toaster position='top-center' reverseOrder={false} />
        {isDialogActive && <DialogController />}
      </div>
      <div
        className='z-10 flex min-h-screen flex-col items-center justify-center'
        style={{
          backgroundColor: colors.backgroundColor.color as string,
          color: colors.textColor.color as string,
        }}
        onClick={handleCloseColorPickers}
      >
        <Hero />
      </div>
    </>
  );
};
export default Main;
