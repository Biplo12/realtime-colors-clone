import React from 'react';
import { useAppSelector } from 'store/store-hooks';

import PlusIcon from '~/svg/plus.svg';

interface IFAQItemProps {
  active: number | null;
  setActive: React.Dispatch<React.SetStateAction<number | null>>;
  index: number;
  item: {
    question: string;
    answer: string;
  };
}

const FAQItem: React.FC<IFAQItemProps> = ({
  active,
  setActive,
  index,
  item,
}): JSX.Element => {
  const { secondaryColor, accentColor } = useAppSelector(
    (state) => state.global.colors
  );
  return (
    <div
      className='min-h-16 flex w-full flex-col items-start justify-center gap-6 rounded-md p-6'
      style={{ backgroundColor: secondaryColor.color as string }}
      onClick={() => setActive(active === index ? null : index)}
    >
      <button className='mxlg:text-xl flex w-full items-center justify-between text-left text-2xl font-bold'>
        {item.question}
        <PlusIcon
          className={`${
            active === index ? 'rotate-45 transform' : ''
          } h-6 w-6 transition-all duration-300`}
          style={{ '--accent': accentColor.color as string }}
        />
      </button>
      {active === index && <p className='text-xl font-light'>{item.answer}</p>}
    </div>
  );
};
export default FAQItem;
