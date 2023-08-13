import React, { useState } from 'react';

import DialogHeader from '@/components/common/DialogHeader';
import ExportTypeContent from '@/components/Dialogs/ExportDialog/Partials/ExportTypeContent';
import SelectExportType from '@/components/Dialogs/ExportDialog/Partials/SelectExportType';

import CloseIcon from '~/svg/close.svg';

const ExportDialog: React.FC = (): JSX.Element => {
  const [exportType, setExportType] = useState(0);
  return (
    <div className='relative'>
      <div className='fixed left-1/2 top-1/2 z-50 min-h-[350px] min-w-[600px] -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-white px-4 shadow-lg'>
        <DialogHeader title='Export' Icon={CloseIcon} />
        <div className='flex h-full flex-col items-start justify-start'>
          <SelectExportType
            exportType={exportType}
            setExportType={setExportType}
          />
          <ExportTypeContent exportType={exportType} />
        </div>
      </div>
    </div>
  );
};
export default ExportDialog;
