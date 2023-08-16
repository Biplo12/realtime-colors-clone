import React from 'react';
import { useAppSelector } from 'store/store-hooks';
const HeroMosaic: React.FC = (): JSX.Element => {
  const {
    textColor,
    primaryColor,
    secondaryColor,
    backgroundColor,
    accentColor,
  } = useAppSelector((state) => state.global.colors);
  return (
    <svg
      viewBox='0 0 652 644'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='max-h-[644px] w-full max-w-[652px]'
    >
      <rect
        opacity='0.05'
        x='1'
        width='163'
        height='60'
        rx='10'
        fill={textColor.color as string}
      />
      <rect
        x='424'
        width='193'
        height='60'
        rx='10'
        fill={secondaryColor.color as string}
      />
      <rect
        x='424'
        y='68'
        width='193'
        height='175'
        rx='10'
        fill={secondaryColor.color as string}
      />
      <rect
        opacity='0.2'
        x='424'
        y='401'
        width='193'
        height='79'
        rx='10'
        fill={primaryColor.color as string}
      />
      <rect
        x='255'
        y='626'
        width='362'
        height='18'
        rx='9'
        fill={backgroundColor.color as string}
      />
      <rect
        x='80'
        y='579'
        width='166'
        height='65'
        rx='10'
        fill={backgroundColor.color as string}
      />
      <rect
        x='255'
        y='579'
        width='160'
        height='40'
        rx='10'
        fill={textColor.color as string}
      />
      <rect
        opacity='0.05'
        x='255'
        y='490'
        width='160'
        height='80'
        rx='10'
        fill={textColor.color as string}
      />
      <rect
        opacity='0.05'
        x='255'
        y='400'
        width='160'
        height='80'
        rx='10'
        fill={textColor.color as string}
      />
      <rect
        x='80'
        y='68'
        width='335'
        height='324'
        rx='10'
        fill={primaryColor.color as string}
      />
      <rect
        x='80'
        y='401'
        width='166'
        height='169'
        rx='10'
        fill={textColor.color as string}
      />
      <rect
        x='424'
        y='490'
        width='193'
        height='129'
        rx='10'
        fill={accentColor.color as string}
      />
      <rect
        x='626'
        y='490'
        width='26'
        height='154'
        rx='10'
        fill={primaryColor.color as string}
      />
      <rect
        x='424'
        y='252'
        width='91'
        height='140'
        rx='10'
        fill={backgroundColor.color as string}
      />
      <rect
        x='524'
        y='252'
        width='93'
        height='140'
        rx='10'
        fill={backgroundColor.color as string}
      />
      <rect
        opacity='0.05'
        x='626'
        width='26'
        height='480'
        rx='10'
        fill={textColor.color as string}
      />
      <rect
        x='173'
        width='242'
        height='60'
        rx='10'
        fill={backgroundColor.color as string}
      />
      <rect
        x='1'
        y='68'
        width='70'
        height='157'
        rx='10'
        fill={backgroundColor.color as string}
      />
      <rect
        opacity='0.05'
        x='1'
        y='234'
        width='70'
        height='259'
        rx='10'
        fill={textColor.color as string}
      />
      <rect
        x='1'
        y='502'
        width='70'
        height='142'
        rx='10'
        fill={secondaryColor.color as string}
      />
    </svg>
  );
};
export default HeroMosaic;
