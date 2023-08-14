import React from 'react';

import useCreateZipFile from '@/hooks/useCreateZipFile';

interface IDownloadZipButtonProps {
  fileName: string;
}

const DownloadZipButton: React.FC<IDownloadZipButtonProps> = ({
  fileName,
}): JSX.Element => {
  const { handleDownloadAsZip } = useCreateZipFile();

  return (
    <button
      className='w-full rounded-md bg-gray-200 p-4 transition-all duration-300 ease-in-out hover:bg-gray-300 focus:bg-gray-300 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'
      onClick={() => handleDownloadAsZip(fileName)}
      disabled={!fileName}
    >
      Download
    </button>
  );
};
export default DownloadZipButton;
