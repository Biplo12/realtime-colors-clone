import React from 'react';

import useCopyToClipboard from '@/hooks/useCopyToClipboard';

interface ICopyButtonProps {
  text: string;
}

const CopyButton: React.FC<ICopyButtonProps> = ({ text }): JSX.Element => {
  const { isCopied, handleCopyToClipboard } = useCopyToClipboard();

  return (
    <button
      className={`w-full rounded-md p-4 transition-all duration-300 ease-in-out focus:outline-none ${
        isCopied
          ? 'bg-[#18AC7A]'
          : 'bg-gray-200 hover:bg-gray-300 focus:bg-gray-300'
      }`}
      onClick={() => handleCopyToClipboard(text)}
    >
      {isCopied ? 'Copied!' : 'Copy'}
    </button>
  );
};
export default CopyButton;
