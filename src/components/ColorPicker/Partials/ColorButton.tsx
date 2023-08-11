import React from 'react';
import { closeColorPickers, openColorPicker } from 'state/globalSlice';
import { useAppDispatch, useAppSelector } from 'store/store-hooks';

interface IColorButtonProps {
  item: {
    label: string;
    btnBackgroundColor: string | null;
    btnTextColor?: string | null;
    colorPickerComponent: JSX.Element;
    isLocked: boolean;
  };
  colors: IColors;
}

const ColorButton: React.FC<IColorButtonProps> = ({
  item,
  colors,
}): JSX.Element => {
  const { label, btnBackgroundColor, colorPickerComponent, btnTextColor } =
    item;
  const dispatch = useAppDispatch();
  const colorPickers = useAppSelector((state) => state.global.colorPickers);

  const handleOpenColorPicker = (label: string) => {
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
        className='flex min-w-[120px] items-center justify-center rounded-md px-6 py-4'
        onClick={() => handleOpenColorPicker(label.toLowerCase())}
      >
        <p
          className='text-md'
          style={{
            color: btnTextColor ? btnTextColor : (colors?.textColor as string),
          }}
        >
          {label}
        </p>
      </button>
    </div>
  );
};
export default ColorButton;
