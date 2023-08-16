import React from 'react';
import { randomizeColors } from 'state/globalSlice';
import { useAppDispatch } from 'store/store-hooks';

import ToolBarButtonToolTip from '@/components/common/ToolBarButtonToolTip';

import Reroll from '~/svg/reroll.svg';

const RandomColorsButton: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleRandomizeColors = () => {
    dispatch(randomizeColors());
  };

  return (
    <>
      <ToolBarButtonToolTip
        tooltipId='randomize-colors'
        tooltipText='Randomize Colors'
        toolTipShortcut='Spacebar'
      />
      <button
        onClick={handleRandomizeColors}
        className='flex items-center justify-center gap-3 rounded-md bg-white px-4 py-2'
        data-tip
        data-tooltip-id='randomize-colors'
      >
        <h1 className='mxlg:flex hidden'>Randomize</h1>

        <Reroll className='h-10 w-10' />
      </button>
    </>
  );
};

export default RandomColorsButton;
