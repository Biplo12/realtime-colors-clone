import React from 'react';
import { Toaster } from 'react-hot-toast';
import { useAppSelector } from 'store/store-hooks';

import useOnLoad from '@/hooks/useOnload';

import DialogController from '@/components/Dialogs/DialogController';
import Hero from '@/components/Hero/Hero';
import ToolBar from '@/components/ToolBar/ToolBar';
import WhySection from '@/components/WhySection/WhySection';
const Main: React.FC = (): JSX.Element => {
  const { colors, handleCloseColorPickers } = useOnLoad();
  const isDialogActive =
    useAppSelector((state) => state.dialog.openedDialog) !== null;
  return (
    <>
      <div className='absolute left-0 top-0 z-50'>
        <ToolBar />
        <Toaster position='top-center' reverseOrder={false} />
        {isDialogActive && <DialogController />}
      </div>
      <div
        className='z-10 flex flex-col items-center justify-center px-4'
        style={{
          backgroundColor: colors.backgroundColor.color as string,
          color: colors.textColor.color as string,
        }}
        onClick={handleCloseColorPickers}
      >
        <Hero />
        <WhySection />
      </div>
    </>
  );
};
export default Main;
