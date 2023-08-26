import React from 'react';

import Logo from '@/components/common/Logo';
import Navbar from '@/components/Layout/Partials/Header/Navbar';
import TopBar from '@/components/Layout/TopBar';
const Header: React.FC = (): JSX.Element => {
  return (
    <>
      <TopBar />
      <div className='mxlg:flex-wrap mxlg:justify-center absolute left-0 top-12 z-50 flex h-16 w-full items-center justify-around px-4'>
        <Logo />
        <Navbar />
      </div>
    </>
  );
};
export default Header;
