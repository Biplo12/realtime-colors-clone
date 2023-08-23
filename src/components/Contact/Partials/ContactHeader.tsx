import React from 'react';
import { useAppSelector } from 'store/store-hooks';

const ContactHeader: React.FC = (): JSX.Element => {
  const { primaryColor, accentColor } = useAppSelector(
    (state) => state.global.colors
  );
  return (
    <div className='mxlg:w-full flex flex-col items-center justify-center gap-10'>
      <h1 className='mxlg:text-[2rem] text-[3.35rem] font-bold leading-tight'>
        Your{' '}
        <span
          className='gradient-text'
          style={
            {
              '--primary-color': primaryColor.color as string,
              '--accent-color': accentColor.color as string,
            } as React.CSSProperties
          }
        >
          Journey{' '}
        </span>
        Shouldn't End Here.
      </h1>
      <p className='mxlg:text-[1.25rem] mb-4 text-2xl'>
        Follow me on social media to stay tuned on more projects.
      </p>
    </div>
  );
};
export default ContactHeader;
