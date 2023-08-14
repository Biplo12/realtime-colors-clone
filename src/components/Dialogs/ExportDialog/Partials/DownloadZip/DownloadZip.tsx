import React, { useState } from 'react';

import DownloadZipButton from '@/components/Dialogs/ExportDialog/Partials/DownloadZip/DownloadZipButton';
import DownloadZipInput from '@/components/Dialogs/ExportDialog/Partials/DownloadZip/DownloadZipInput';
const DownloadZip: React.FC = (): JSX.Element => {
  const [fileName, setFileName] = useState<string>('');

  return (
    <div className='mt-6 flex w-full flex-col items-start justify-start gap-4'>
      <DownloadZipInput setFileName={setFileName} fileName={fileName} />
      <DownloadZipButton fileName={fileName} />
    </div>
  );
};
export default DownloadZip;
