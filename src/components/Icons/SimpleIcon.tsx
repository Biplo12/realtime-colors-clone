import React from 'react';
import { useAppSelector } from 'store/store-hooks';
const SimpleIcon: React.FC = (): JSX.Element => {
  const { accentColor, textColor } = useAppSelector(
    (state) => state.global.colors
  );
  return (
    <svg width='179' height='89' viewBox='0 0 179 89' fill='none'>
      <rect
        y='26'
        width='154'
        height='63'
        fill={accentColor.color as string}
        fill-opacity='0.6'
      />
      <path
        d='M142 15.5V0'
        stroke={textColor.color as string}
        stroke-width='8'
      />
      <path
        d='M163 34L178.5 34'
        stroke={textColor.color as string}
        stroke-width='8'
      />
      <path
        d='M158 19.5L170.5 7'
        stroke={textColor.color as string}
        stroke-width='8'
      />
      <path
        d='M63 54L74.5 65L95.5 44'
        stroke={textColor.color as string}
        stroke-width='8'
      />
    </svg>
  );
};
export default SimpleIcon;
