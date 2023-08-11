import React from 'react';
import { useAppSelector } from 'store/store-hooks';

interface INavbarItemProps {
  label: string;
  icon?: JSX.Element;
}

const NavbarItem: React.FC<INavbarItemProps> = ({
  label,
  icon,
}): JSX.Element => {
  const textColor = useAppSelector((state) => state.global.colors.textColor);
  return (
    <li className='flex items-center' style={{ color: textColor as string }}>
      <a
        href='#'
        className='flex items-center gap-3 duration-100 ease-linear hover:opacity-70'
      >
        <span className='font-medium'>{label}</span>
        {icon && icon}
      </a>
    </li>
  );
};
export default NavbarItem;
