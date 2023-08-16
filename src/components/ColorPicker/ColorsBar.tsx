import React from 'react';
import { SketchPicker } from 'react-color';
import { setColor } from 'state/globalSlice';
import { useAppDispatch, useAppSelector } from 'store/store-hooks';

import ColorButton from '@/components/ColorPicker/Partials/ColorButton';

const ColorsBar: React.FC = (): JSX.Element => {
  const colors = useAppSelector((state) => state.global.colors);
  const dispatch = useAppDispatch();

  const onColorChange = (color: string, label: string) => {
    dispatch(setColor({ color, label }));
  };

  const colorPickerItems = [
    {
      label: 'Text',
      btnBackgroundColor: colors.backgroundColor.color,
      colorPickerComponent: (
        <SketchPicker
          color={colors.textColor.color as string}
          onChangeComplete={(color) => onColorChange(color.hex, 'textColor')}
        />
      ),
    },
    {
      label: 'Background',
      btnBackgroundColor: colors.backgroundColor.color,
      colorPickerComponent: (
        <SketchPicker
          color={colors.backgroundColor.color as string}
          onChangeComplete={(color) =>
            onColorChange(color.hex, 'backgroundColor')
          }
        />
      ),
    },
    {
      label: 'Primary',
      btnBackgroundColor: colors.primaryColor.color,
      colorPickerComponent: (
        <SketchPicker
          color={colors.primaryColor.color as string}
          onChangeComplete={(color) => onColorChange(color.hex, 'primaryColor')}
        />
      ),
    },
    {
      label: 'Secondary',
      btnBackgroundColor: colors.secondaryColor.color,
      colorPickerComponent: (
        <SketchPicker
          color={colors.secondaryColor.color as string}
          onChangeComplete={(color) =>
            onColorChange(color.hex, 'secondaryColor')
          }
        />
      ),
    },
    {
      label: 'Accent',
      btnBackgroundColor: colors.accentColor.color,
      colorPickerComponent: (
        <SketchPicker
          color={colors.accentColor.color as string}
          onChangeComplete={(color) => onColorChange(color.hex, 'accentColor')}
        />
      ),
    },
  ];

  return (
    <div className='mxlg:flex-col flex flex-wrap gap-2'>
      {colorPickerItems.map((item, index) => (
        <ColorButton key={index} item={item} colors={colors} />
      ))}
    </div>
  );
};
export default ColorsBar;
