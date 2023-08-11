import React from 'react';

import ColorsButtons from '@/components/ColorPicker/Partials/ColorsButtons';
import DarkModeToggle from '@/components/ColorPicker/Partials/DarkModeToggle';
import RandomColorsButton from '@/components/ColorPicker/Partials/RandomColorsButton';

const ColorPickerBar: React.FC = (): JSX.Element => {
  return (
    <div className='fixed bottom-6 left-1/2 mx-auto h-[70px] w-auto -translate-x-1/2 transform rounded-md bg-[#737374] p-1.5'>
      <div className='flex h-full items-center justify-between gap-1.5'>
        <ColorsButtons />
        <RandomColorsButton />
        <DarkModeToggle />
      </div>
    </div>
  );
};
export default ColorPickerBar;
