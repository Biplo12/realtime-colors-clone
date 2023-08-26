import React from 'react';
import { useAppSelector } from 'store/store-hooks';
const TopBar: React.FC = (): JSX.Element => {
  const { primaryColor, secondaryColor } = useAppSelector(
    (state) => state.global.colors
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  return (
    <div
      className='mxlg:h-12 flex h-10 w-full items-center justify-center p-4 text-center'
      style={{
        backgroundColor: primaryColor.color as string,
        color: isDarkMode ? '#fff' : '#000',
      }}
    >
      <h1>
        Original application can be found at{' '}
        <a
          href='https://realtimecolors.com/'
          className='border-b font-bold'
          style={{ borderColor: secondaryColor.color as string }}
          target='_blank'
          rel='noreferrer'
        >
          Realtime Colors
        </a>
      </h1>
    </div>
  );
};
export default TopBar;
