import React from 'react';
import { openDialog } from 'state/dialogSlice';
import { useAppDispatch } from 'store/store-hooks';

import ToolBarButtonToolTip from '@/components/common/ToolbarButtonToolTip';

import ExportIcon from '~/svg/export.svg';

const ExportColorsButton: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleOpenDialog = () => {
    dispatch(openDialog('EXPORT_DIALOG'));
  };
  return (
    <>
      <ToolBarButtonToolTip
        tooltipId='export-colors'
        tooltipText='Export colors'
        toolTipShortcut='Ctrl+E'
      />
      <button
        className='rounded-md bg-white px-4 py-2'
        data-tip
        data-tooltip-id='export-colors'
        onClick={handleOpenDialog}
      >
        <ExportIcon className='h-10 w-10' stroke='#000' />
      </button>
    </>
  );
};

export default ExportColorsButton;
