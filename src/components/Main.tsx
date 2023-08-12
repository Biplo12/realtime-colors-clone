import React from 'react';

import useOnLoad from '@/hooks/useOnload';

import Hero from '@/components/Hero/Hero';
import ToolBar from '@/components/ToolBar/ToolBar';
const Main: React.FC = (): JSX.Element => {
  const { colors, handleCloseColorPickers } = useOnLoad();

  return (
    <div
      className='flex h-screen flex-col items-center justify-center'
      style={{
        backgroundColor: colors.backgroundColor.color as string,
        color: colors.textColor.color as string,
      }}
    >
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
