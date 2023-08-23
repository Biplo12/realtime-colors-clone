import React from 'react';
import { Toaster } from 'react-hot-toast';
import { useAppSelector } from 'store/store-hooks';

import useOnLoad from '@/hooks/useOnload';

import Articles from '@/components/Articles/Articles';
import Contact from '@/components/Contact/Contact';
import DialogController from '@/components/Dialogs/DialogController';
import FAQ from '@/components/FAQ/FAQ';
import GridStats from '@/components/GridStats/GridStats';
import Hero from '@/components/Hero/Hero';
import Plans from '@/components/Plans/Plans';
import ToolBar from '@/components/ToolBar/ToolBar';
import WhySection from '@/components/WhySection/WhySection';
import WorkSteps from '@/components/WorkSteps/WorkSteps';
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
        className='z-10 flex flex-col items-center justify-center gap-32 px-4'
        style={{
          backgroundColor: colors.backgroundColor.color as string,
          color: colors.textColor.color as string,
        }}
        onClick={handleCloseColorPickers}
      >
        <Hero />
        <WhySection />
        <GridStats />
        <WorkSteps />
        <Plans />
        <FAQ />
        <Articles />
        <Contact />
      </div>
    </>
  );
};
export default Main;
