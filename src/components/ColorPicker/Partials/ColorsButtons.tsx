import React from 'react';
import { SketchPicker } from 'react-color';
import { setColor } from 'state/globalSlice';
import { useAppDispatch, useAppSelector } from 'store/store-hooks';

import ColorButton from '@/components/ColorPicker/Partials/ColorButton';
const ColorsButtons: React.FC = (): JSX.Element => {
  const colors = useAppSelector((state) => state.global.colors);
  const dispatch = useAppDispatch();

  const onColorChange = (color: string, label: string) => {
    dispatch(setColor({ color, label }));
  };

  const colorPickerItems = [
    {
      label: 'Text',
      isLocked: false,
      btnBackgroundColor: colors.backgroundColor,
      colorPickerComponent: (
        <SketchPicker
          color={colors.textColor as string}
          onChangeComplete={(color) => onColorChange(color.hex, 'textColor')}
        />
      ),
    },
    {
      label: 'Background',
      isLocked: false,
      btnBackgroundColor: colors.backgroundColor,
      colorPickerComponent: (
        <SketchPicker
          color={colors.backgroundColor as string}
          onChangeComplete={(color) =>
            onColorChange(color.hex, 'backgroundColor')
          }
        />
      ),
    },
    {
      label: 'Primary',
      isLocked: false,
      btnBackgroundColor: colors.primaryColor,
      btnTextColor: colors.backgroundColor,
      colorPickerComponent: (
        <SketchPicker
          color={colors.primaryColor as string}
          onChangeComplete={(color) => onColorChange(color.hex, 'primaryColor')}
        />
      ),
    },
    {
      label: 'Secondary',
      isLocked: false,
      btnBackgroundColor: colors.secondaryColor,
      colorPickerComponent: (
        <SketchPicker
          color={colors.secondaryColor as string}
          onChangeComplete={(color) =>
            onColorChange(color.hex, 'secondaryColor')
          }
        />
      ),
    },
    {
      label: 'Accent',
      isLocked: false,
      btnBackgroundColor: colors.accentColor,
      btnTextColor: colors.backgroundColor,
      colorPickerComponent: (
        <SketchPicker
          color={colors.accentColor as string}
          onChangeComplete={(color) => onColorChange(color.hex, 'accentColor')}
        />
      ),
    },
  ];

  return (
    <>
      {colorPickerItems.map((item, index) => (
        <ColorButton key={index} item={item} colors={colors} />
      ))}
    </>
  );
};
export default ColorsButtons;
