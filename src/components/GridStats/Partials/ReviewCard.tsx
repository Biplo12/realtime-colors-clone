import React from 'react';
import { useAppSelector } from 'store/store-hooks';

interface IReviewCardProps {
  hoveredElement: {
    element: string | null;
  };
  setHoveredElement: React.Dispatch<
    React.SetStateAction<{
      element: string | null;
    }>
  >;
}

const ReviewCard: React.FC<IReviewCardProps> = ({
  hoveredElement,
  setHoveredElement,
}): JSX.Element => {
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const { accentColor } = useAppSelector((state) => state.global.colors);

  return (
    <div
      className='mxlg:w-full mxlg:h-[25vh] col-span-2 col-start-4 row-start-3 flex h-[20vh] flex-col items-center justify-center rounded-xl text-center shadow-lg'
      style={{
        backgroundColor: accentColor.color as string,
        color: !isDarkMode ? '#000' : '#fff',
      }}
    >
      <h1 className='text-3xl font-bold'>100+ ProductHunt Upvotes</h1>
      <div className='relative inline-block'>
        <a
          className={`relative z-50 text-center text-lg ${
            hoveredElement.element === 'review' && !isDarkMode
              ? 'text-white'
              : hoveredElement.element === 'review' && isDarkMode
              ? 'text-black'
              : hoveredElement.element !== 'review' && !isDarkMode
              ? 'text-black'
              : hoveredElement.element !== 'review' && isDarkMode
              ? 'text-white'
              : 'text-black'
          }`}
          href='#'
          target='_blank'
          rel='noreferrer'
          onMouseEnter={() => setHoveredElement({ element: 'review' })}
          onMouseLeave={() => setHoveredElement({ element: null })}
        >
          Leave a review
        </a>
        <span
          className={`absolute bottom-0 left-1/2 z-10 w-[130px] -translate-x-1/2 transform duration-100 ease-linear ${
            hoveredElement.element === 'review' ? 'h-full' : 'h-[0.1rem]'
          } ${isDarkMode ? 'bg-white' : 'bg-black'}`}
        />
      </div>
    </div>
  );
};
export default ReviewCard;
