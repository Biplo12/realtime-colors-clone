import React from 'react';
import { useAppSelector } from 'store/store-hooks';
const ColorPicker: React.FC = (): JSX.Element => {
  const colors = useAppSelector((state) => state.global.colors);
  const colorPickerItems = [
    {
      label: 'Text',
      isLocked: false,
      color: colors.textColor,
    },
    {
      label: 'Background',
      isLocked: false,
      color: colors.backgroundColor,
    },
    {
      label: 'Primary',
      isLocked: false,
      color: colors.primaryColor,
    },
    {
      label: 'Secondary',
      isLocked: false,
      color: colors.secondaryColor,
    },
    {
      label: 'Accent',
      isLocked: false,
      color: colors.accentColor,
    },
  ];
  return (
    <div className='fixed bottom-6 left-0 h-[60px] w-full rounded-lg bg-[#737374] px-2'>
      <div className='flex h-full items-center justify-between'>
        {colorPickerItems.map((item, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-center'
          >
            <div
              style={{ backgroundColor: item.color }}
              className='flex min-h-[40px] min-w-[120px] items-center justify-center rounded-lg p-4'
            >
              <p className='text-xs' style={{ color: colors.textColor }}>
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ColorPicker;
