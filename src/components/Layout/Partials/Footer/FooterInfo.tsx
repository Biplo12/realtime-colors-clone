import React from 'react';
import { useAppSelector } from 'store/store-hooks';
const FooterInfo: React.FC = (): JSX.Element => {
  const { accentColor } = useAppSelector((state) => state.global.colors);
  return (
    <div className='flex w-full flex-wrap items-center justify-center gap-2 p-4 text-center'>
      Original design by
      <a
        href='https://twitter.com/juxtopposed'
        target='_blank'
        rel='noopener noreferrer'
        className='font-bold'
        style={{ color: accentColor.color as string }}
      >
        @juxtopposed
      </a>
    </div>
  );
};
export default FooterInfo;
