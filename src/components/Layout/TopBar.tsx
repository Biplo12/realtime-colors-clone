import React from 'react';
import { useAppSelector } from 'store/store-hooks';
const TopBar: React.FC = (): JSX.Element => {
  const { primaryColor, secondaryColor } = useAppSelector(
    (state) => state.global.colors
  );
  return (
    <div
      className='mxlg:h-12 flex h-10 w-full items-center justify-center p-4 text-center'
      style={{ backgroundColor: primaryColor.color as string }}
    >
      <h1>
        Original application can be found at{' '}
        <a
          href='https://realtimecolors.com/'
          className='font-bold hover:underline'
          style={{ color: secondaryColor.color as string }}
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
