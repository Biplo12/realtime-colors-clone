import React, { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';

import useCopyToClipboard from '@/hooks/useCopyToClipboard';

import ShareIcon from '~/svg/share.svg';

const ShareUrl: React.FC = (): JSX.Element => {
  const { isCopied, handleCopyToClipboard } = useCopyToClipboard();
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl(window.location.href);
    }
  }, []);

  return (
    <>
      <Tooltip
        id='share-link'
        place='top'
        style={{
          backgroundColor: isCopied ? '#18AC7A' : '#000',
        }}
      >
        {!isCopied && (
          <div className='text-center text-xs'>
            <p className='font-bold'>
              Share Link
              <br />
              <span className='font-normal text-gray-400'>(CTRL + S)</span>
            </p>
          </div>
        )}
        {isCopied && (
          <div className='text-center text-xs'>
            <p className='font-bold'>Copied!</p>
          </div>
        )}
      </Tooltip>

      <button
        className='flex items-center justify-center gap-3 rounded-md bg-white px-4 py-2'
        data-tip
        data-tooltip-id='share-link'
        onClick={() => handleCopyToClipboard(url)}
      >
        <h1 className='mxlg:flex hidden'>Share Link</h1>

        <ShareIcon className='h-10 w-10' stroke='#000' />
      </button>
    </>
  );
};

export default ShareUrl;
