import React, { useState } from 'react';

import ExportInput from '@/components/common/ExportInput';
import DownloadZipButton from '@/components/Dialogs/ExportDialog/Partials/DownloadZip/DownloadZipButton';
const DownloadZip: React.FC = (): JSX.Element => {
  const [fileName, setFileName] = useState<string>('');
  const handleChangeFileName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(e.target.value);
  };
  return (
    <div className='mt-4 flex w-full flex-col items-start justify-start gap-4'>
      <ExportInput
        onChange={handleChangeFileName}
        value={fileName}
        label='Enter file name:'
        placeholder='e.g. my_colors'
      />
      <DownloadZipButton fileName={fileName} />
    </div>
  );
};
export default DownloadZip;
