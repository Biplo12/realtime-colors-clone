import React from 'react';
import { Tooltip } from 'react-tooltip';
import { randomizeColors } from 'state/globalSlice';
import { useAppDispatch } from 'store/store-hooks';

import Reroll from '~/svg/reroll.svg';

const RandomColorsButton: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleRandomizeColors = () => {
    dispatch(randomizeColors());
  };

  return (
    <>
      <Tooltip id='randomize-colors' place='top'>
        <div className='text-center text-xs'>
          <p className='font-bold'>
            Randomize
            <br />
            <span className='font-normal text-gray-600'>(colors)</span>
          </p>
        </div>
      </Tooltip>
      <button
        onClick={handleRandomizeColors}
        className='rounded-md bg-white px-4 py-2'
        data-tip
        data-for='randomize-colors'
      >
        <Reroll className='h-10 w-10' />
      </button>
    </>
  );
};

export default RandomColorsButton;
