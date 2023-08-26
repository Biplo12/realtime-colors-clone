import React from 'react';
import { useAppSelector } from 'store/store-hooks';

import PrimaryButton from '@/components/common/PrimaryButton';
import ContactHeader from '@/components/Contact/Partials/ContactHeader';
const Contact: React.FC = (): JSX.Element => {
  const { primaryColor } = useAppSelector((state) => state.global.colors);
  return (
    <div className='flex flex-col items-center justify-center gap-10 text-center'>
      <ContactHeader />
      <PrimaryButton
        label='Stay Tuned'
        backgroundColor={primaryColor.color as string}
      />
    </div>
  );
};
export default Contact;
