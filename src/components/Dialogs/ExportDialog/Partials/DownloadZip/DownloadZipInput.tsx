import React from 'react';

interface IDownloadZipInputProps {
  fileName: string;
  setFileName: React.Dispatch<React.SetStateAction<string>>;
}

const DownloadZipInput: React.FC<IDownloadZipInputProps> = ({
  fileName,
  setFileName,
}): JSX.Element => {
  const handleChangeFileName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(e.target.value);
  };

  return (
    <>
      <label>Enter file name:</label>
      <input
        type='text'
        placeholder='e.g. my_colors'
        className='w-full rounded-md p-4 outline-none transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none'
        onChange={handleChangeFileName}
        value={fileName}
      />
    </>
  );
};
export default DownloadZipInput;
