import React from 'react';

import ColorsBar from '@/components/ColorPicker/ColorsBar';
import DarkModeToggle from '@/components/ToolBar/Partials/DarkModeToggle';
import ExportColorsButton from '@/components/ToolBar/Partials/ExportColorsButton';
import RandomColorsButton from '@/components/ToolBar/Partials/RandomColorsButton';
import ShareUrl from '@/components/ToolBar/Partials/ShareUrl';
import UndoButton from '@/components/ToolBar/Partials/UndoButton';

const ToolBar: React.FC = (): JSX.Element => (
  <div className='fixed bottom-6 left-1/2 mx-auto h-[70px] w-full max-w-[60%] -translate-x-1/2 transform rounded-md bg-[#737374] p-1.5'>
    <div className='flex h-full items-center justify-between gap-1.5'>
      <ColorsBar />
      <RandomColorsButton />
      <UndoButton />
      <DarkModeToggle />
      <ExportColorsButton />
      <ShareUrl />
    </div>
  </div>
);
export default ToolBar;
