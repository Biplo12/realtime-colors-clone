import React from 'react';

interface IExportCSSColorTypeSelectorProps {
  colorType: string;
  setColorType: (type: string) => void;
}

const ExportCSSColorTypeSelector: React.FC<
  IExportCSSColorTypeSelectorProps
> = ({ colorType, setColorType }): JSX.Element => {
  const colorTypes = ['HEX', 'RGB', 'HSL'];
  const handleChangeColorType = (type: string) => {
    setColorType(type);
  };
  return (
    <div className='flex gap-4'>
      {colorTypes.map((type, index) => (
        <button
          className={`rounded-lg border-2 px-6 py-1 ${
            colorType === type
              ? 'border-black bg-black text-white'
              : 'border-gray-300 bg-white'
          }`}
          key={index}
          onClick={() => handleChangeColorType(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
};
export default ExportCSSColorTypeSelector;
