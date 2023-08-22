import React from 'react';
import { useAppSelector } from 'store/store-hooks';

import FigmaIcon from '~/svg/figma.svg';

interface IFigmaCardProps {
  hoveredElement: {
    element: string | null;
  };
  setHoveredElement: React.Dispatch<
    React.SetStateAction<{
      element: string | null;
    }>
  >;
}

const FigmaCard: React.FC<IFigmaCardProps> = ({
  hoveredElement,
  setHoveredElement,
}): JSX.Element => {
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const { backgroundColor } = useAppSelector((state) => state.global.colors);
  return (
    <div
      className='mxlg:w-full mxlg:h-[25vh] relative col-span-3 row-start-3 flex h-[20vh] flex-col items-center justify-center overflow-hidden rounded-xl text-center shadow-lg'
      style={{
        backgroundColor: !isDarkMode ? '#000' : '#fff',
        color: !isDarkMode ? '#fff' : '#000',
      }}
    >
      <h1 className='z-50 text-3xl font-bold'>5K+ Plugin Users</h1>
      <div className='relative inline-block'>
        <a
          className={`relative z-50 text-lg ${
            hoveredElement.element === 'figma' && isDarkMode
              ? 'text-white'
              : hoveredElement.element === 'figma' && !isDarkMode
              ? 'text-black'
              : hoveredElement.element !== 'figma' && isDarkMode
              ? 'text-black'
              : hoveredElement.element !== 'figma' && !isDarkMode
              ? 'text-white'
              : 'text-black'
          }`}
          href='#'
          target='_blank'
          rel='noreferrer'
          onMouseEnter={() => setHoveredElement({ element: 'figma' })}
          onMouseLeave={() => setHoveredElement({ element: null })}
        >
          Check it out on Figma
        </a>
        <span
          className={`absolute bottom-0 left-1/2 z-10 w-[180px] -translate-x-1/2 transform duration-100 ease-linear ${
            hoveredElement.element === 'figma' ? 'h-full' : 'h-[0.1rem]'
          } ${!isDarkMode ? 'bg-white' : 'bg-black'}`}
        />
      </div>
      <FigmaIcon
        className='mxlg:h-full mxlg:bottom-0 absolute -left-10 -top-2 z-0 h-[120%]'
        style={{ '--bg': backgroundColor.color as string }}
      />
    </div>
  );
};
export default FigmaCard;
