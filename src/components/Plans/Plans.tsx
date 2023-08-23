import React from 'react';
import { useAppSelector } from 'store/store-hooks';

import PlanCard from '@/components/Plans/Partials/PlanCard';
import PlansHeader from '@/components/Plans/Partials/PlansHeader';

import { hexToHsl, hslToHex } from '@/utils/colorUtils';
const Plans: React.FC = (): JSX.Element => {
  const { backgroundColor, secondaryColor, accentColor } = useAppSelector(
    (state) => state.global.colors
  );
  const bgHSL = hexToHsl(backgroundColor.color as string);
  const darkerBgHSL = bgHSL.l - 5;
  const darkerBgHex = hslToHex(bgHSL.h, bgHSL.s, darkerBgHSL);
  const lighterBgHSL = bgHSL.l + 2.5;
  const lighterBgHex = hslToHex(bgHSL.h, bgHSL.s, lighterBgHSL);
  const plans = [
    {
      title: 'Basic',
      price: 'Free',
      features: ['Choose any color', 'Export all you want'],
      isPopular: false,
      backgroundColor: lighterBgHex,
      buttonText: 'Get Started',
      buttonColor: secondaryColor.color as string,
    },
    {
      title: 'Pro',
      price: '$0.00 / month',
      features: [
        'Choose any color',
        'Export all you want',
        'Get a big thank you for checking this site out',
      ],
      isPopular: true,
      backgroundColor: darkerBgHex,
      buttonText: 'Get Started',
      buttonColor: accentColor.color as string,
    },
    {
      title: 'Enterprise',
      price: '$0.00 / month',
      features: [
        'Choose any color',
        'Export all you want',
        'Get a big thank you for checking this site out',
        'Super duper exclusive chat via email',
      ],
      isPopular: false,
      backgroundColor: lighterBgHex,
      buttonText: 'Contact',
      buttonColor: secondaryColor.color as string,
    },
  ];

  return (
    <div className='mxlg:w-full flex h-auto w-3/4 flex-col items-center justify-center gap-12'>
      <PlansHeader />
      <div className='mxlg:flex-col mxlg:gap-4 flex w-full items-center justify-between gap-12'>
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};
export default Plans;
