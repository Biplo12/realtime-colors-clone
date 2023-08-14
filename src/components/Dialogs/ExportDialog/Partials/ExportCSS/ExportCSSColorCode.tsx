import React from 'react';

interface IExportCSSColorCodeProps {
  cssText: string[];
}

const ExportCSSColorCode: React.FC<IExportCSSColorCodeProps> = ({
  cssText,
}): JSX.Element => {
  return (
    <div className='h-full w-full rounded-md border-2 border-gray-300 bg-gray-200 p-4'>
      <div className='flex flex-col gap-1'>
        {cssText.map((line, index) => (
          <span key={index}>{line.replace('Color', '')}</span>
        ))}
      </div>
    </div>
  );
};
export default ExportCSSColorCode;
