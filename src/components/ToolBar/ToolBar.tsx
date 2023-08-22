import React, { useEffect, useState } from 'react';

import ColorsBar from '@/components/ColorPicker/ColorsBar';
import DarkModeToggle from '@/components/ToolBar/Partials/DarkModeToggle';
import ExportColorsButton from '@/components/ToolBar/Partials/ExportColorsButton';
import RandomColorsButton from '@/components/ToolBar/Partials/RandomColorsButton';
import ShareUrl from '@/components/ToolBar/Partials/ShareUrl';
import ToolBarResponsive from '@/components/ToolBar/ToolBarResponsive';
import ToolBarResponsiveButton from '@/components/ToolBar/ToolBarResponsiveButton';

const ToolBar: React.FC = (): JSX.Element => {
  const [toolBarOpened, setToolBarOpened] = useState(false);

  const handleOpenToolBar = () => {
    setToolBarOpened(!toolBarOpened);
  };

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setToolBarOpened(false);
    }
  }, []);

  return (
    <div className='z-50 w-full'>
      <div className='mxlg:hidden fixed bottom-6 left-1/2 flex h-[70px] w-full max-w-[1005px] -translate-x-1/2 transform items-center justify-center gap-2 rounded-md bg-[#737374] p-1.5'>
        <ColorsBar />
        <RandomColorsButton />
        <DarkModeToggle />
        <ExportColorsButton />
        <ShareUrl />
      </div>
      <ToolBarResponsive toolBarOpened={toolBarOpened} />
      <ToolBarResponsiveButton handleOpenToolBar={handleOpenToolBar} />
    </div>
  );
};
export default ToolBar;
