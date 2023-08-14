import React from 'react';

import ColorsBar from '@/components/ColorPicker/ColorsBar';
import DarkModeToggle from '@/components/ToolBar/Partials/DarkModeToggle';
import ExportColorsButton from '@/components/ToolBar/Partials/ExportColorsButton';
import RandomColorsButton from '@/components/ToolBar/Partials/RandomColorsButton';
import ShareUrl from '@/components/ToolBar/Partials/ShareUrl';

const ToolBar: React.FC = (): JSX.Element => (
  <div className='fixed bottom-6 left-1/2 h-[70px] -translate-x-1/2 transform rounded-md bg-[#737374] p-1.5'>
    <div className='flex h-full items-center justify-center gap-1.5'>
      <ColorsBar />
      <RandomColorsButton />
      <DarkModeToggle />
      <ExportColorsButton />
      <ShareUrl />
    </div>
  </div>
);
export default ToolBar;
