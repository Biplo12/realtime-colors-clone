import React from 'react';
import { useAppSelector } from 'store/store-hooks';

import NavbarItem from '@/components/Layout/Partials/Header/NavbarItem';
const FooterSocialLinks: React.FC = (): JSX.Element => {
  const { textColor } = useAppSelector((state) => state.global.colors);
  const socialLinks = [
    {
      label: 'Twitter',
      link: '#',
    },
    {
      label: 'Codepen',
      link: '#',
    },
    {
      label: 'Youtube',
      link: '#',
    },
    {
      label: 'Dribble',
      link: '#',
    },
    {
      label: 'Github',
      link: '#',
    },
  ];
  return (
    <nav className='flex flex-col items-start justify-between gap-8'>
      <h1
        className='text-xl font-bold'
        style={{ color: textColor.color as string }}
      >
        LET'S CONNECT
      </h1>
      <ul className='flex flex-col items-start gap-8'>
        {socialLinks.map((link, index) => (
          <NavbarItem key={index} label={link.label} />
        ))}
      </ul>
    </nav>
  );
};
export default FooterSocialLinks;
