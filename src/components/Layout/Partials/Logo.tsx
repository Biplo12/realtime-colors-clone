/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useAppSelector } from 'store/store-hooks';
const Logo: React.FC = (): JSX.Element => {
  const textColor = useAppSelector((state) => state.global.colors.textColor);
  return (
    <div className='flex items-center justify-center gap-3'>
      <img src='/images/logo.png' alt='logo' className='h-10 w-10' />
      <h1 className='text-2xl font-bold' style={{ color: textColor as string }}>
        Realtime Colors Clone
      </h1>
    </div>
  );
};
export default Logo;
