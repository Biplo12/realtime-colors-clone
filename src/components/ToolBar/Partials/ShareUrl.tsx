import React from 'react';
import { Tooltip } from 'react-tooltip';

import useCopyToClipboard from '@/hooks/useCopyToClipboard';

import ShareIcon from '~/svg/share.svg';

const ShareUrl: React.FC = (): JSX.Element => {
  const { isCopied, handleCopyToClipboard } = useCopyToClipboard();
  const url = window.location.href;

  return (
    <>
      <Tooltip
        id='share-link'
        place='top'
        style={{
          backgroundColor: isCopied ? '#18AC7A' : '#333333',
        }}
      >
        {!isCopied && (
          <div className='text-center text-xs'>
            <p className='font-bold'>
              Share link
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
        className='rounded-md bg-white px-4 py-2'
        data-tip
        data-tooltip-id='share-link'
        onClick={() => handleCopyToClipboard(url)}
      >
        <ShareIcon className='h-10 w-10' stroke='#000' />
      </button>
    </>
  );
};

export default ShareUrl;
