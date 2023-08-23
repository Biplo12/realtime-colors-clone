import React from 'react';
import { useAppSelector } from 'store/store-hooks';

import FooterHeader from '@/components/Layout/Partials/Footer/FooterHeader';
import FooterNavbar from '@/components/Layout/Partials/Footer/FooterNavbar';
import FooterSocialLinks from '@/components/Layout/Partials/Footer/FooterSocialLinks';

const Footer: React.FC = (): JSX.Element => {
  const { backgroundColor } = useAppSelector((state) => state.global.colors);
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  return (
    <footer
      className='flex min-h-[160vh] w-full flex-col items-center justify-start'
      style={{ backgroundColor: backgroundColor.color as string }}
    >
      <div
        className='mxlg:h-[900px] flex min-h-[450px] w-3/4 flex-col items-center justify-start rounded-md'
        style={{ backgroundColor: !isDarkMode ? '#fff' : '#000' }}
      >
        <div className='mxlg:gap-0 flex h-full w-full flex-wrap items-start justify-between gap-8 px-20 py-12'>
          <FooterHeader />
          <FooterNavbar />
          <FooterSocialLinks />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
