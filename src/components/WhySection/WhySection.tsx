import React, { Fragment } from 'react';

import RealisticIcon from '@/components/Icons/RealisticIcon';
import SimpleIcon from '@/components/Icons/SimpleIcon';
import TimeIcon from '@/components/Icons/TimeIcon';
import WhyCard from '@/components/WhySection/Partials/WhyCard';

const WhySection: React.FC = (): JSX.Element => {
  const whySectionCards = [
    {
      title: 'Saves time',
      description:
        'No need to spend hours implementing different variations of colors. Decide right away!',
      icon: <TimeIcon />,
    },
    {
      title: 'It`s Realistic',
      description:
        'Color Palettes make it hard to pick. This tool distributes the colors on a real website.',
      icon: <RealisticIcon />,
    },
    {
      title: 'It`s simple',
      description:
        'Push a few buttons, and there you have it! Your very own branding colors, ready to export.',
      icon: <SimpleIcon />,
    },
  ];
  return (
    <div className='mxlg:w-full flex h-auto min-h-[80vh] w-3/4 flex-col items-center justify-center gap-4'>
      <h1 className='text-center text-3xl font-bold'>Why Realtime Colors?</h1>
      <div className='mxlg:flex-col mxlg:gap-4 mt-4 flex w-full items-center justify-between gap-4'>
        {whySectionCards.map((card, index) => (
          <Fragment key={index}>
            <WhyCard card={card} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
export default WhySection;
