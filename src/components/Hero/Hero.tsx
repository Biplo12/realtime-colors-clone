import React from 'react';

import HeroHeader from '@/components/Hero/Partials/HeroHeader';
import HeroMosaic from '@/components/Hero/Partials/HeroMosaic';
const Hero: React.FC = (): JSX.Element => {
  return (
    <div className='flex h-screen w-full items-center justify-evenly'>
      <HeroHeader />
      <HeroMosaic />
    </div>
  );
};
export default Hero;
