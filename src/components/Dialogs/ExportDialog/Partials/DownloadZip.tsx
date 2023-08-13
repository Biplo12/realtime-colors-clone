import React, { useState } from 'react';

import useCreateZipFile from '@/hooks/useCreateZipFile';
const DownloadZip: React.FC = (): JSX.Element => {
  const [fileName, setFileName] = useState<string>('');
  const { handleDownloadAsZip } = useCreateZipFile();
  const handleChangeFileName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(e.target.value);
  };

  return (
    <div className='mt-6 flex w-full flex-col items-start justify-start gap-4'>
      <label htmlFor=''>Enter file name:</label>
      <input
        type='text'
        placeholder='e.g. my_colors'
        className='w-full rounded-md p-4 outline-none transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none'
        onChange={handleChangeFileName}
        value={fileName}
      />
      <button
        className='w-full rounded-md bg-gray-200 p-4 transition-all duration-300 ease-in-out hover:bg-gray-300 focus:bg-gray-300 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'
        onClick={() => handleDownloadAsZip(fileName)}
        disabled={!fileName}
      >
        Download
      </button>
    </div>
  );
};
export default DownloadZip;
