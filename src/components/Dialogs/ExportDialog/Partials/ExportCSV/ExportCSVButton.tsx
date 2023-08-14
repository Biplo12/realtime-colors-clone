import React, { useState } from 'react';

interface IExportCSVButtonProps {
  csvText: string[];
}

const ExportCSVButton: React.FC<IExportCSVButtonProps> = ({
  csvText,
}): JSX.Element => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(csvText.join('\n'));
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };
  return (
    <button
      className={`w-full rounded-md p-4 transition-all duration-300 ease-in-out focus:outline-none ${
        isCopied
          ? 'bg-[#18AC7A]'
          : 'bg-gray-200 hover:bg-gray-300 focus:bg-gray-300'
      }`}
      onClick={handleCopyToClipboard}
    >
      {isCopied ? 'Copied!' : 'Copy'}
    </button>
  );
};
export default ExportCSVButton;
