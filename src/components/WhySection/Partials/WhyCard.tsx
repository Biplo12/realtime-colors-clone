import React, { useState } from 'react';
import { useAppSelector } from 'store/store-hooks';

import { hexToHsl, hslToHex } from '@/utils/colorUtils';

interface IWhyCardProps {
  card: IWhyCard;
}

const WhyCard: React.FC<IWhyCardProps> = ({ card }): JSX.Element => {
  const [headerHovered, setHeaderHovered] = useState(false);
  const { accentColor, backgroundColor } = useAppSelector(
    (state) => state.global.colors
  );
  const bgHSL = hexToHsl(backgroundColor.color as string);
  const darkerBgHSL = bgHSL.l - 5;
  const darkerBgHex = hslToHex(bgHSL.h, bgHSL.s, darkerBgHSL);

  return (
    <div
      className='mxlg:w-full relative flex min-h-[400px] flex-col items-center justify-center gap-6 rounded-md p-6 px-10 '
      style={{
        backgroundColor: darkerBgHex,
      }}
      onMouseEnter={() => setHeaderHovered(true)}
      onMouseLeave={() => setHeaderHovered(false)}
    >
      {card.icon}
      <div className='relative flex h-full w-full flex-col gap-6'>
        <div className='relative inline-block'>
          <h2 className='relative z-50 text-center text-xl font-bold'>
            {card.title}
          </h2>
          <span
            className={`absolute bottom-0 left-1/2 z-10 w-[140px] -translate-x-1/2 transform opacity-50 duration-200 ease-linear ${
              headerHovered ? 'h-5' : 'h-3'
            }`}
            style={{ backgroundColor: accentColor.color as string }}
          />
        </div>
        <p className='mxlg:max-w-full max-w-[450px] text-center text-lg'>
          {card.description}
        </p>
      </div>
    </div>
  );
};
export default WhyCard;
