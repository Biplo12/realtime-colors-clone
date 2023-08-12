import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip';

import ShareIcon from '~/svg/share.svg';

const ShareUrl: React.FC = (): JSX.Element => {
  const [tooltip, setTooltip] = useState('share-link');

  const handleCopyUrl = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setTooltip('share-link-copied');
    setTimeout(() => {
      setTooltip('share-link');
    }, 2000);
  };

  return (
    <>
      <Tooltip
        id='share-link'
        place='top'
        style={{
          backgroundColor:
            tooltip === 'share-link-copied' ? '#18AC7A' : '#333333',
        }}
      >
        {tooltip === 'share-link' && (
          <div className='text-center text-xs'>
            <p className='font-bold'>
              Share link
              <br />
              <span className='font-normal text-gray-400'>(CTRL + S)</span>
            </p>
          </div>
        )}
        {tooltip === 'share-link-copied' && (
          <div className='text-center text-xs'>
            <p className='font-bold'>Copied!</p>
          </div>
        )}
      </Tooltip>

      <button
        className='rounded-md bg-white px-4 py-2'
        data-tip
        data-tooltip-id={tooltip}
        onClick={handleCopyUrl}
      >
        <ShareIcon className='h-10 w-10' stroke='#000' />
      </button>
    </>
  );
};

export default ShareUrl;
