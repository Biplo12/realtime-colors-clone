import React from 'react';
import { useAppSelector } from 'store/store-hooks';

import PrimaryButton from '@/components/common/PrimaryButton';

import ScrollIcon from '~/svg/scroll.svg';

const HeroHeader: React.FC = (): JSX.Element => {
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const { textColor, secondaryColor, primaryColor, accentColor } =
    useAppSelector((state) => state.global.colors);

  return (
    <div className='mxlg:w-full flex flex-col items-start justify-center gap-10'>
      <h1 className='mxlg:text-[2rem] text-[3.35rem] font-bold leading-tight'>
        Visualize Your{' '}
        <span
          className='gradient-text'
          style={
            {
              '--primary-color': primaryColor.color as string,
              '--accent-color': accentColor.color as string,
            } as React.CSSProperties
          }
        >
          Colors
        </span>
        <br />
        On a Real Website
      </h1>
      <p className='mxlg:text-[1.25rem] mb-4 text-2xl'>
        Choosing a color palette for your website?
        <br />
        Use the Toolbar below to realize your choices.
      </p>
      <div className='mxlg:flex-col mxlg:w-full flex justify-center gap-3'>
        <PrimaryButton
          label='Get Started'
          textColor={isDarkMode ? '#fff' : '#000'}
          backgroundColor={primaryColor.color as string}
        />
        <PrimaryButton
          label='How does it work?'
          textColor={isDarkMode ? '#fff' : '#000'}
          backgroundColor={secondaryColor.color as string}
        />
      </div>
      <div className='text-md flex items-center gap-3'>
        <ScrollIcon className='h-10 w-10' stroke={textColor.color as string} />
        <p>Scroll to see more sections</p>
      </div>
    </div>
  );
};

export default HeroHeader;
