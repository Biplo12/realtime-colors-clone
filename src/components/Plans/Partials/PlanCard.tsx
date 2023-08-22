import React from 'react';
import { useAppSelector } from 'store/store-hooks';

import PrimaryButton from '@/components/common/PrimaryButton';

import CheckMarkIcon from '~/svg/checkmark.svg';
import PopularIcon from '~/svg/popular.svg';
interface IPlanCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular: boolean;
  backgroundColor: string;
  buttonText: string;
  buttonColor: string;
}

const PlanCard: React.FC<IPlanCardProps> = ({
  title,
  price,
  features,
  isPopular,
  backgroundColor,
  buttonText,
  buttonColor,
}): JSX.Element => {
  const { accentColor } = useAppSelector((state) => state.global.colors);
  return (
    <div
      className='mxlg:w-full relative flex min-h-[550px] w-[500px] flex-col items-center justify-around gap-6 rounded-md p-6 px-12 text-center shadow-lg'
      style={{ backgroundColor }}
    >
      <div className='flex flex-col items-center justify-start gap-5'>
        {isPopular && (
          <div className='flex items-center justify-center gap-3'>
            <PopularIcon
              className='h-8 w-8'
              style={{ '--primary': accentColor.color as string }}
            />
            <h5
              style={{ color: accentColor.color as string }}
              className='font-bold'
            >
              Most Popular
            </h5>
          </div>
        )}
        <h3 className='text-4xl font-bold'>{title}</h3>
        <h4 className='text-xl'>{price}</h4>
      </div>
      <div className='flex flex-col items-start justify-center gap-2'>
        {features.map((feature, index) => (
          <div className='flex items-center justify-center gap-6' key={index}>
            <CheckMarkIcon
              className='h-8 w-8'
              style={{ '--accent': accentColor.color as string }}
            />
            <p className='text-center'>{feature}</p>
          </div>
        ))}
      </div>
      <div className='flex items-center justify-end'>
        <PrimaryButton backgroundColor={buttonColor} label={buttonText} />
      </div>
    </div>
  );
};
export default PlanCard;
