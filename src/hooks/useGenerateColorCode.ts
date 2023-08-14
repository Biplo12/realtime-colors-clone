import { useEffect, useState } from 'react';
import { useAppSelector } from 'store/store-hooks';

import { hexToHsl, hexToRgb } from '@/utils/colorUtils';

const useGenerateColorCode = (colorType: string, exportType: string) => {
  const [cssText, setCssText] = useState<string[]>([]);
  const colors = useAppSelector((state) => state.global.colors);
  useEffect(() => {
    const lines = Object.keys(colors).map((color) => {
      const colorHex = colors[color as keyof typeof colors].color;
      const colorRGB = hexToRgb(colorHex as string);
      const colorHSL = hexToHsl(colorHex as string);
      const selectedColor =
        colorType === 'HEX'
          ? colorHex
          : colorType === 'RGB'
          ? `rgb(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b})`
          : `hsl(${colorHSL.h}, ${colorHSL.s}%, ${colorHSL.l}%)`;

      if (exportType === 'css') {
        return `--${color}: ${selectedColor};`;
      }
      if (exportType === 'scss') {
        return `$${color}: ${selectedColor};`;
      }
      if (exportType === 'tailwindcss') {
        return `'${color}': '${selectedColor}',`;
      }
    });

    setCssText(lines as string[]);
  }, [colorType, colors, exportType]);

  return { cssText };
};

export default useGenerateColorCode;
