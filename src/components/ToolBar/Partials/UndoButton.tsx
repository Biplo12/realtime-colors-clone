import React from 'react';
import { Tooltip } from 'react-tooltip';
import { undoLastAction } from 'state/globalSlice';
import { useAppDispatch } from 'store/store-hooks';

import UndoIcon from '~/svg/undo.svg';

const UndoButton: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleUndoLastAction = () => {
    dispatch(undoLastAction());
  };
  return (
    <>
      <Tooltip id='undo-action' place='top'>
        <div className='text-center text-xs'>
          <p className='font-bold'>
            Undo
            <br />
            <span className='font-normal text-gray-400'>(Ctrl + Z)</span>
          </p>
        </div>
      </Tooltip>

      <button
        className='flex h-14 w-[4.35rem] items-center justify-center rounded-md bg-white px-4 py-2'
        data-tip
        data-tooltip-id='undo-action'
        onClick={handleUndoLastAction}
      >
        <UndoIcon className='h-6 w-6' stroke='#000' />
      </button>
    </>
  );
};
export default UndoButton;
