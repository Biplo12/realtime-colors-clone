import React from 'react';

import useCreateZipFile from '@/hooks/useCreateZipFile';

interface IDownloadZipButtonProps {
  fileName: string;
}

const DownloadZipButton: React.FC<IDownloadZipButtonProps> = ({
  fileName,
}): JSX.Element => {
  const { handleDownloadAsZip, isDownloaded } = useCreateZipFile();

  return (
    <button
      className={`w-full rounded-md p-4 transition-all duration-300 ease-in-out focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${
        isDownloaded
          ? 'bg-[#18AC7A]'
          : 'bg-gray-200 hover:bg-gray-300 focus:bg-gray-300'
      }`}
      onClick={() => handleDownloadAsZip(fileName)}
      disabled={!fileName}
    >
      {isDownloaded ? 'Downloaded!' : 'Download'}
    </button>
  );
};
export default DownloadZipButton;
