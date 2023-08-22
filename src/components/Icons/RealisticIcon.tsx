import React from 'react';
import { useAppSelector } from 'store/store-hooks';
const RealisticIcon: React.FC = (): JSX.Element => {
  const { backgroundColor, accentColor, textColor } = useAppSelector(
    (state) => state.global.colors
  );
  return (
    <svg width='112' height='114' viewBox='0 0 112 114' fill='none'>
      <rect width='58' height='58' fill={backgroundColor.color as string} />
      <rect
        x='69'
        y='25'
        width='33'
        height='33'
        fill={accentColor.color as string}
        fill-opacity='0.6'
      />
      <rect
        x='69'
        y='71'
        width='43'
        height='43'
        fill={textColor.color as string}
        fill-opacity='0.2'
      />
      <rect
        x='20'
        y='70'
        width='38'
        height='39'
        fill={textColor.color as string}
      />
    </svg>
  );
};
export default RealisticIcon;
