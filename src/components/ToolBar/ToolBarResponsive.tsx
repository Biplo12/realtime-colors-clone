import React from 'react';

import ColorsBar from '@/components/ColorPicker/ColorsBar';
import DarkModeToggle from '@/components/ToolBar/Partials/DarkModeToggle';
import ExportColorsButton from '@/components/ToolBar/Partials/ExportColorsButton';
import RandomColorsButton from '@/components/ToolBar/Partials/RandomColorsButton';
import ShareUrl from '@/components/ToolBar/Partials/ShareUrl';

interface IToolBarResponsiveProps {
  toolBarOpened: boolean;
}

const ToolBarResponsive: React.FC<IToolBarResponsiveProps> = ({
  toolBarOpened,
}): JSX.Element => {
  return (
    <>
      {toolBarOpened && (
        <div className='fixed bottom-[4.35rem] left-0 flex w-full flex-col gap-2 bg-[#737374] p-2'>
          <ColorsBar />
          <DarkModeToggle />
          <RandomColorsButton />
          <ExportColorsButton />
          <ShareUrl />
        </div>
      )}
    </>
  );
};
export default ToolBarResponsive;
