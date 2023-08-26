import React from 'react';
import { useAppSelector } from 'store/store-hooks';

import FooterHeader from '@/components/Layout/Partials/Footer/FooterHeader';
import FooterInfo from '@/components/Layout/Partials/Footer/FooterInfo';
import FooterNavbar from '@/components/Layout/Partials/Footer/FooterNavbar';
import FooterSocialLinks from '@/components/Layout/Partials/Footer/FooterSocialLinks';

const Footer: React.FC = (): JSX.Element => {
  const { backgroundColor } = useAppSelector((state) => state.global.colors);
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  return (
    <footer
      className='mb-20 flex min-h-[60vh] w-full flex-col items-center justify-start'
      style={{ backgroundColor: backgroundColor.color as string }}
    >
      <div
        className='mxlg:w-full flex h-full w-3/4 flex-col items-center justify-start rounded-md'
        style={{ backgroundColor: !isDarkMode ? '#fff' : '#000' }}
      >
        <div className='mxlg:justify-between mxlg:p-10 flex h-auto w-full flex-wrap items-start justify-between gap-8 px-20 py-12'>
          <FooterHeader />
          <FooterNavbar />
          <FooterSocialLinks />
        </div>
        <div
          className='mxlg:px-10 h-[1px] w-3/4 bg-opacity-10 px-20'
          style={{ backgroundColor: isDarkMode ? '#fff' : '#000' }}
        />
        <FooterInfo />
      </div>
    </footer>
  );
};
export default Footer;
