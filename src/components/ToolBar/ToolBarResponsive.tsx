import React from 'react';

import ColorsBar from '@/components/ColorPicker/ColorsBar';
import DarkModeToggle from '@/components/ToolBar/Partials/DarkModeToggle';
import ExportColorsButton from '@/components/ToolBar/Partials/ExportColorsButton';
import RandomColorsButton from '@/components/ToolBar/Partials/RandomColorsButton';
import ShareUrl from '@/components/ToolBar/Partials/ShareUrl';
const ToolBarResponsive: React.FC = (): JSX.Element => {
  return (
    <div className='fixed bottom-16 left-0 flex w-full flex-col gap-2 bg-[#737374] p-2'>
      <ColorsBar />
      <RandomColorsButton />
      <DarkModeToggle />
      <ExportColorsButton />
      <ShareUrl />
    </div>
  );
};
export default ToolBarResponsive;
