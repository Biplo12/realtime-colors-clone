import React, { useState } from 'react';
import { useAppSelector } from 'store/store-hooks';

interface IWhyCardProps {
  card: IWhyCard;
}

const WhyCard: React.FC<IWhyCardProps> = ({ card }): JSX.Element => {
  const [headerHovered, setHeaderHovered] = useState(false);
  const { accentColor, backgroundColor } = useAppSelector(
    (state) => state.global.colors
  );
  return (
    <div
      className='flex flex-col items-center justify-center gap-6 rounded-md p-4'
      style={{
        backgroundColor: backgroundColor.color as string,
      }}
    >
      <div className='flex h-[100px] w-[100px] items-center justify-center'>
        {card.icon}
      </div>
      <div
        className='relative'
        onMouseEnter={() => setHeaderHovered(true)}
        onMouseLeave={() => setHeaderHovered(false)}
      >
        <h2 className='z-50 text-center text-xl font-bold'>{card.title}</h2>
        <div
          className={`absolute bottom-0 left-0 z-10 duration-200 ease-linear ${
            headerHovered ? 'h-4' : 'h-1'
          }`}
          style={{ backgroundColor: accentColor.color as string }}
        />
      </div>
      <p className='max-w-[375px] text-left'>{card.description}</p>
    </div>
  );
};
export default WhyCard;
