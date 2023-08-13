import React from 'react';
import { Tooltip } from 'react-tooltip';
import { toggleDarkMode } from 'state/globalSlice';
import { useAppDispatch, useAppSelector } from 'store/store-hooks';

import MoonIcon from '~/svg/moon.svg';
import SunIcon from '~/svg/sun.svg';
const DarkModeToggle: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };
  return (
    <>
      <Tooltip id='darkmode-toggle' place='top'>
        <div className='text-center text-xs'>
          <p className='font-bold'>
            Dark/Light
            <br />
            <span className='font-normal text-gray-400'>(CTRL + Q)</span>
          </p>
        </div>
      </Tooltip>
      <button
        onClick={handleToggleDarkMode}
        className='rounded-md bg-white px-4 py-2'
        data-tip
        data-tooltip-id='darkmode-toggle'
        style={{
          backgroundColor: !isDarkMode ? '#fff' : '#000',
        }}
      >
        {!isDarkMode ? (
          <SunIcon className='h-10 w-10' />
        ) : (
          <MoonIcon className='h-10 w-10' />
        )}
      </button>
    </>
  );
};
export default DarkModeToggle;
