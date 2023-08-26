import { Link } from 'lucide-react';
import React from 'react';
import { useAppSelector } from 'store/store-hooks';

import NavbarItem from '@/components/Layout/Partials/Header/NavbarItem';
const FooterNavbar: React.FC = (): JSX.Element => {
  const { textColor } = useAppSelector((state) => state.global.colors);
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
    <nav className='flex flex-col items-start justify-between gap-8'>
      <h1
        className='text-xl font-bold'
        style={{ color: textColor.color as string }}
      >
        Explore
      </h1>
      <ul className=' flex flex-col items-start gap-8'>
        {navlinks.map((link, index) => (
          <NavbarItem key={index} label={link.label} icon={link.icon} />
        ))}
      </ul>
    </nav>
  );
};
export default FooterNavbar;
