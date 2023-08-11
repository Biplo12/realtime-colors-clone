import React from 'react';
import { closeColorPickers, openColorPicker } from 'state/globalSlice';
import { useAppDispatch, useAppSelector } from 'store/store-hooks';

import LockColorButton from '@/components/ColorPicker/Partials/LockColorButton';

interface IColorButtonProps {
  item: {
    label: string;
    btnBackgroundColor: string | null;
    colorPickerComponent: JSX.Element;
    isLocked: boolean;
  };
  colors: IColors;
}

const ColorButton: React.FC<IColorButtonProps> = ({ item }): JSX.Element => {
  const { label, btnBackgroundColor, colorPickerComponent, isLocked } = item;
  const dispatch = useAppDispatch();
  const colorPickers = useAppSelector((state) => state.global.colorPickers);
  const textColor = useAppSelector(
    (state) => state.global.colors.textColor.color
  );

  const handleOpenColorPicker = (label: string) => {
    if (isLocked) return;
    const isOpened =
      colorPickers[label.toLowerCase() as keyof typeof colorPickers];
    if (isOpened) {
      dispatch(closeColorPickers());
      return;
    }
    dispatch(openColorPicker(label));
  };
  return (
    <div className='relative flex flex-col items-center justify-center'>
      {colorPickers[label.toLowerCase() as keyof typeof colorPickers] && (
        <div className='absolute bottom-16 bg-black bg-opacity-50'>
          {colorPickerComponent}
        </div>
      )}
      <button
        style={{ backgroundColor: btnBackgroundColor as string }}
        className='relative flex min-w-[120px] items-center justify-center rounded-md border border-transparent px-6 py-4 hover:border-gray-600'
        onClick={() => handleOpenColorPicker(label.toLowerCase())}
      >
        <p
          className='text-md'
          style={{
            color: textColor as string,
          }}
        >
          {label}
        </p>
      </button>
      <LockColorButton isLocked={item.isLocked} label={label} />
    </div>
  );
};
export default ColorButton;
