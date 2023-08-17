import React from 'react';

import WhyCard from '@/components/WhySection/Partials/WhyCard';

import RealisticIcon from '~/svg/realistic.svg';
import SimpleIcon from '~/svg/simple.svg';
import TimeIcon from '~/svg/time.svg';
const WhySection: React.FC = (): JSX.Element => {
  const whySectionCards = [
    {
      title: 'Saves time',
      description:
        'No need to spend hours implementing different variations of colors. Decide right away!',
      icon: <TimeIcon className='h-[100px] w-[100px]' fill='#fff' />,
    },
    {
      title: 'It`s Realistic',
      description:
        'Color Palettes make it hard to pick. This tool distributes the colors on a real website.',
      icon: <RealisticIcon className='h-[100px] w-[100px]' fill='#fff' />,
    },
    {
      title: 'It`s simple',
      description:
        'Push a few buttons, and there you have it! Your very own branding colors, ready to export.',
      icon: <SimpleIcon className='h-[100px] w-[100px]' fill='#fff' />,
    },
  ];
  return (
    <div className='flex h-[80vh] w-full flex-col items-center justify-center gap-4'>
      <h1 className='text-center text-3xl font-bold'>Why Realtime Colors?</h1>
      <div className='mt-4 flex flex-col items-center justify-center gap-4 md:flex-row'>
        {whySectionCards.map((card, index) => (
          <WhyCard key={index} card={card} />
        ))}
      </div>
    </div>
  );
};
export default WhySection;
