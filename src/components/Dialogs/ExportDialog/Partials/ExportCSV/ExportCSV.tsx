import React from 'react';
import { useAppSelector } from 'store/store-hooks';

import ExportCSVButton from '@/components/Dialogs/ExportDialog/Partials/ExportCSV/ExportCSVButton';
import ExportCSVInput from '@/components/Dialogs/ExportDialog/Partials/ExportCSV/ExportCSVInput';
const ExportCSV: React.FC = (): JSX.Element => {
  const colors = useAppSelector((state) => state.global.colors);
  const placeholderWithHash = Object.keys(colors).map((color) => {
    return `${colors[color as keyof typeof colors].color}`;
  });
  const placeholderWithoutHash = Object.keys(colors).map((color) => {
    return `${colors[color as keyof typeof colors].color?.slice(1)}`;
  });

  return (
    <div className='mt-6 flex w-full flex-col items-start justify-center gap-4 rounded-lg bg-white'>
      <ExportCSVInput
        placeholder={placeholderWithoutHash}
        label='Without #: '
      />
      <ExportCSVButton csvText={placeholderWithoutHash} />
      <ExportCSVInput placeholder={placeholderWithHash} label='With #: ' />
      <ExportCSVButton csvText={placeholderWithHash} />
    </div>
  );
};
export default ExportCSV;
