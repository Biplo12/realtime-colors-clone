/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useAppSelector } from 'store/store-hooks';
const Logo: React.FC = (): JSX.Element => {
  const textColor = useAppSelector((state) => state.global.colors.textColor);
  return (
    <div className='flex items-center justify-center gap-3'>
      <img
        src='/images/logo.png'
        alt='logo'
        className='logo-spin h-10 w-10 duration-150 ease-linear'
      />
      <a
        className='mxlg:text-lg exsm:hidden text-2xl font-bold'
        style={{ color: textColor.color as string }}
        href='/'
      >
        Realtime Colors Clone
      </a>
    </div>
  );
};
export default Logo;
