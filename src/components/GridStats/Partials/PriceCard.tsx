import React from 'react';
import { useAppSelector } from 'store/store-hooks';
const PriceCard: React.FC = (): JSX.Element => {
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const { secondaryColor } = useAppSelector((state) => state.global.colors);
  return (
    <div
      className='mxlg:w-full mxlg:h-[25vh] col-start-5 row-span-2 flex h-[32.5vh] flex-col items-center justify-center rounded-xl text-center '
      style={{
        backgroundColor: secondaryColor.color as string,
        color: !isDarkMode ? '#000' : '#fff',
      }}
    >
      <h1 className='text-[2rem] font-semibold'>100% Free!</h1>
      <p className='mxlg:text-lg text-xl'>Sponsored by YOU.</p>
    </div>
  );
};
export default PriceCard;
