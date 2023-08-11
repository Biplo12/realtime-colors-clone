import React from 'react';
import { useAppSelector } from 'store/store-hooks';

import PrimaryButton from '@/components/common/PrimaryButton';

import ScrollIcon from '~/svg/scroll.svg';
const HeroHeader: React.FC = (): JSX.Element => {
  const backgroundColor = useAppSelector(
    (state) => state.global.colors.backgroundColor
  );
  const primaryColor = useAppSelector(
    (state) => state.global.colors.primaryColor
  );
  const secondaryColor = useAppSelector(
    (state) => state.global.colors.secondaryColor
  );
  const textColor = useAppSelector((state) => state.global.colors.textColor);
  return (
    <div className='flex h-full flex-col items-start justify-center gap-10'>
      <h1 className='text-6xl font-bold'>
        Visualize Your <span>Colors</span>
        <br />
        On a Real Website
      </h1>
      <p className='mb-4 text-2xl'>
        Choosing a color palette for your website?
        <br />
        Use the Toolbar below to realize your choices.
      </p>
      <div className='flex justify-center gap-3'>
        <PrimaryButton
          label='Get Started'
          textColor={backgroundColor as string}
          backgroundColor={primaryColor as string}
        />
        <PrimaryButton
          label='How does it work?'
          textColor={textColor as string}
          backgroundColor={secondaryColor as string}
        />
      </div>
      <div className='text-md flex items-center gap-3'>
        <ScrollIcon className='h-10 w-10' stroke={textColor as string} />
        <p>Scroll to see more sections</p>
      </div>
    </div>
  );
};
export default HeroHeader;
