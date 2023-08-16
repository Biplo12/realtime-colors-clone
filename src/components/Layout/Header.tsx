import React from 'react';

import Logo from '@/components/Layout/Partials/Logo';
import Navbar from '@/components/Layout/Partials/Navbar';
const Header: React.FC = (): JSX.Element => {
  return (
    <div className='mxlg:flex-wrap mxlg:justify-center absolute left-0 top-3 z-50 flex h-16 w-full items-center justify-around px-4'>
      <Logo />
      <Navbar />
    </div>
  );
};
export default Header;
