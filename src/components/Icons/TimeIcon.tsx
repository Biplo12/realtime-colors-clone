import React from 'react';
import { useAppSelector } from 'store/store-hooks';
const TimeIcon: React.FC = (): JSX.Element => {
  const { backgroundColor, accentColor, textColor } = useAppSelector(
    (state) => state.global.colors
  );
  return (
    <svg width='117' height='117' viewBox='0 0 117 117' fill='none'>
      <circle
        cx='58.5'
        cy='58.5'
        r='58.5'
        fill={backgroundColor.color as string}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M89.4669 8.85912L58.0465 63.9419L2.44746 41.7023C9.66585 17.5806 32.0298 0 58.5 0C69.872 0 80.4861 3.24483 89.4669 8.85912Z'
        fill={accentColor.color as string}
        fill-opacity='0.6'
      />
      <path
        d='M81.5 22.5L57.1395 64.8489L32 53.5'
        stroke={textColor.color as string}
        stroke-width='7.25581'
      />
    </svg>
  );
};
export default TimeIcon;
