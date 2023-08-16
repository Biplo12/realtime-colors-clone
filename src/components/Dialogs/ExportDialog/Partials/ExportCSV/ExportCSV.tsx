import React from 'react';
import { useAppSelector } from 'store/store-hooks';

import CopyButton from '@/components/common/CopyButton';
import ExportInput from '@/components/common/ExportInput';
const ExportCSV: React.FC = (): JSX.Element => {
  const colors = useAppSelector((state) => state.global.colors);
  const placeholderWithHash = Object.keys(colors).map((color) => {
    return `${colors[color as keyof typeof colors].color},`;
  });
  const placeholderWithoutHash = Object.keys(colors).map((color) => {
    return `${colors[color as keyof typeof colors].color?.slice(1)},`;
  });

  return (
    <div className='mt-2 flex w-full flex-col items-start justify-center gap-4 rounded-lg bg-white'>
      <ExportInput
        placeholder={placeholderWithoutHash}
        label='Without #: '
        value={placeholderWithoutHash.join('\n')}
      />
      <CopyButton text={placeholderWithoutHash.join('\n')} />
      <ExportInput
        placeholder={placeholderWithHash}
        label='With #: '
        value={placeholderWithHash.join('\n')}
      />
      <CopyButton text={placeholderWithHash.join('\n')} />
    </div>
  );
};
export default ExportCSV;
