import React, { useEffect } from 'react';
import { closeColorPickers, randomizeColors } from 'state/globalSlice';
import { useAppDispatch, useAppSelector } from 'store/store-hooks';

import ColorPickerBar from '@/components/ColorPicker/ColorPickerBar';
import Hero from '@/components/Hero/Hero';
const Main: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const colors = useAppSelector((state) => state.global.colors);

  useEffect(() => {
    dispatch(randomizeColors());
  }, [dispatch]);

  const handleCloseColorPickers = () => dispatch(closeColorPickers());

  return (
    <div
      className='flex h-screen flex-col items-center justify-center'
      style={{
        backgroundColor: colors.backgroundColor as string,
        color: colors.textColor as string,
      }}
    >
      <ColorPickerBar />
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
