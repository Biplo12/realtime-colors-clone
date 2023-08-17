import React from 'react';

import HeroHeader from '@/components/Hero/Partials/HeroHeader';
import HeroMosaic from '@/components/Hero/Partials/HeroMosaic';
const Hero: React.FC = (): JSX.Element => {
  return (
    <div className='mxlg:flex-col-reverse mxlg:justify-end mxlg:gap-10 mxmd:h-[110vh] mxlg:mt-12 mxlg:py-12 mt-40 flex h-full w-full items-center justify-around gap-10'>
      <HeroHeader />
      <HeroMosaic />
    </div>
  );
};
export default Hero;
