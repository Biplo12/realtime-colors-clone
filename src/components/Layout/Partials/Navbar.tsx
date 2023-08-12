import React from 'react';
import { useAppSelector } from 'store/store-hooks';

import PrimaryButton from '@/components/common/PrimaryButton';
import NavbarItem from '@/components/Layout/Partials/NavbarItem';

import Link from '~/svg/link.svg';
const Navbar: React.FC = (): JSX.Element => {
  const textColor = useAppSelector((state) => state.global.colors.textColor);
  const primaryColor = useAppSelector(
    (state) => state.global.colors.primaryColor
  );
  const navlinks = [
    {
      label: 'Try Figma plugin',
      icon: <Link className='h-4 w-4' stroke={textColor.color as string} />,
      link: '#',
    },
    {
      label: 'Pallete Generator',
      link: '#',
    },
    {
      label: 'Docs',
      link: '#',
    },
  ];
  return (
    <nav className='flex h-16 items-center justify-between'>
      <ul className='flex items-center gap-8'>
        {navlinks.map((link, index) => (
          <NavbarItem key={index} label={link.label} icon={link.icon} />
        ))}
        <PrimaryButton
          textColor={textColor.color as string}
          backgroundColor={primaryColor.color as string}
          label='Subscribe'
        />
      </ul>
    </nav>
  );
};
export default Navbar;
