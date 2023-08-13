import JSZip from 'jszip';
import { useAppSelector } from 'store/store-hooks';

import { hexToRgb } from '@/utils/colorUtils';

const BASE_URL = 'https://realtimecolors.com';

const useCreateZipFile = () => {
  const colors = useAppSelector((state) => state.global.colors);
  const colorsAsUrl =
    `${colors.textColor.color}-${colors.backgroundColor.color}-${colors.primaryColor.color}-${colors.secondaryColor.color}-${colors.accentColor.color}`.replaceAll(
      '#',
      ''
    );

  const createColorPaletteImage = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 350;
    canvas.height = 75;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      const colorValues = [
        colors.textColor.color,
        colors.backgroundColor.color,
        colors.primaryColor.color,
        colors.secondaryColor.color,
        colors.accentColor.color,
      ];

      const squareWidth = canvas.width / colorValues.length;

      colorValues.forEach((color, index) => {
        ctx.fillStyle = color as string;
        ctx.fillRect(index * squareWidth, 0, squareWidth, canvas.height);
      });
    }

    return canvas.toDataURL('image/png');
  };

  const handleDownloadAsZip = async (fileName: string) => {
    const zipFile = new JSZip();
    const txtFile = `Your selected colors:

Text: ${colors.textColor.color} (${hexToRgb(colors.textColor.color as string)})
Background: ${colors.backgroundColor.color} (${hexToRgb(
      colors.backgroundColor.color as string
    )})

Primary: ${colors.primaryColor.color} (${hexToRgb(
      colors.primaryColor.color as string
    )})

Secondary: ${colors.secondaryColor.color} (${hexToRgb(
      colors.secondaryColor.color as string
    )})
Accent: ${colors.accentColor.color} (${hexToRgb(
      colors.accentColor.color as string
    )})


Realtime Colors link for selected colors: ${BASE_URL}/?colors=${colorsAsUrl}

Thanks for using RealtimeColors.com!
`;

    zipFile.file(`${fileName}-codes.txt`, txtFile);

    const colorPaletteImage = createColorPaletteImage();
    zipFile.file(
      `${fileName}-colors.png`,
      colorPaletteImage.substr(colorPaletteImage.indexOf(',') + 1),
      { base64: true }
    );

    const blob = await zipFile.generateAsync({ type: 'blob' });

    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `${fileName}.zip`;
    downloadLink.click();
  };

  return { handleDownloadAsZip };
};

export default useCreateZipFile;
