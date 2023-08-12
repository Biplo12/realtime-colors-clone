import React from 'react';
import { Tooltip } from 'react-tooltip';

import ExportIcon from '~/svg/export.svg';

const ExportColorsButton: React.FC = (): JSX.Element => {
  return (
    <>
      <Tooltip id='export-colors' place='top'>
        <div className='text-center text-xs'>
          <p className='font-bold'>
            Export
            <br />
            <span className='font-normal text-gray-400'>(CTRL + E)</span>
          </p>
        </div>
      </Tooltip>
      <button
        className='rounded-md bg-white px-4 py-2'
        data-tip
        data-tooltip-id='export-colors'
      >
        <ExportIcon className='h-10 w-10' stroke='#000' />
      </button>
    </>
  );
};

export default ExportColorsButton;
