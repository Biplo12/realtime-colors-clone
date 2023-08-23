import React from 'react';
import { useAppSelector } from 'store/store-hooks';
const UserNumberCard: React.FC = (): JSX.Element => {
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const { primaryColor } = useAppSelector((state) => state.global.colors);
  return (
    <div
      className='mxlg:w-full mxlg:h-[25vh] col-span-4 row-span-2 flex h-[32.5vh] flex-col items-center justify-center rounded-xl text-center '
      style={{
        backgroundColor: primaryColor.color as string,
        color: !isDarkMode ? '#000' : '#fff',
      }}
    >
      <h1 className='mxlg:text-3xl text-[3.25rem] font-semibold'>
        100K+ Users
      </h1>
      <p className='mxlg:text-xl text-2xl'>and counting...</p>
    </div>
  );
};
export default UserNumberCard;
