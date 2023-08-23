import React, { useState } from 'react';

import FigmaCard from '@/components/GridStats/Partials/FigmaCard';
import PriceCard from '@/components/GridStats/Partials/PriceCard';
import ReviewCard from '@/components/GridStats/Partials/ReviewCard';
import UserNumberCard from '@/components/GridStats/Partials/UserNumberCard';

const GridStats: React.FC = (): JSX.Element => {
  const [hoveredElement, setHoveredElement] = useState<{
    element: string | null;
  }>({
    element: null,
  });
  return (
    <div className='mxlg:w-full h-auto w-3/4'>
      <div className='mxlg:flex mxlg:flex-col grid w-full grid-cols-5 grid-rows-2 flex-col items-center justify-start gap-4'>
        <UserNumberCard />
        <PriceCard />
        <FigmaCard
          hoveredElement={hoveredElement}
          setHoveredElement={setHoveredElement}
        />
        <ReviewCard
          hoveredElement={hoveredElement}
          setHoveredElement={setHoveredElement}
        />
      </div>
    </div>
  );
};
export default GridStats;
