import React from 'react';
import { Tooltip } from 'react-tooltip';

interface IToolBarButtonToolTipProps {
  tooltipId: string;
  tooltipText: string;
  toolTipShortcut: string;
}

const ToolBarButtonToolTip: React.FC<IToolBarButtonToolTipProps> = ({
  tooltipId,
  tooltipText,
  toolTipShortcut,
}): JSX.Element => {
  return (
    <Tooltip
      id={tooltipId}
      place='top'
      style={{
        backgroundColor: '#000',
      }}
    >
      <div className='text-center text-xs'>
        <p className='font-bold'>
          {tooltipText}
          <br />
          <span className='font-normal text-gray-400'>({toolTipShortcut})</span>
        </p>
      </div>
    </Tooltip>
  );
};
export default ToolBarButtonToolTip;
