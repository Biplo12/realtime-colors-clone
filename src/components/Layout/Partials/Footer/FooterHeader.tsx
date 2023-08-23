/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useAppSelector } from 'store/store-hooks';

import Logo from '@/components/common/Logo';
const FooterHeader: React.FC = (): JSX.Element => {
  const { textColor } = useAppSelector((state) => state.global.colors);

  return (
    <div className='flex flex-col items-start justify-center gap-6'>
      <Logo />
      <h2 className='text-xl' style={{ color: textColor.color as string }}>
        Visualize your color choices.
      </h2>
      <img
        src='https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=390080&amp;theme=dark'
        alt='Color Palette Generator - Visualize your color choices. | Product Hunt'
      />
    </div>
  );
};
export default FooterHeader;
