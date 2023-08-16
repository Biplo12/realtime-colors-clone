import React from 'react';
const ToolBarResponsiveButton: React.FC = (): JSX.Element => {
  return (
    <div className='mxlg:flex fixed bottom-0 left-1/2 hidden h-[70px] w-full max-w-[1005px] -translate-x-1/2 transform items-center justify-center gap-2 bg-[#737374] p-1.5'>
      <button className='relative flex max-h-[65px] w-full items-center justify-center rounded-md border border-transparent bg-white px-6 py-4 hover:border-gray-600'>
        Colors
      </button>
    </div>
  );
};
export default ToolBarResponsiveButton;
