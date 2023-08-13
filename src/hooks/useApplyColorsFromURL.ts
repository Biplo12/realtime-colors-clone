/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { setColors } from 'state/globalSlice';
import { useAppDispatch } from 'store/store-hooks';

const useApplyColorsFromURL = () => {
  const dispatch = useAppDispatch();
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const colors = params.get('colors');

  useEffect(() => {
    const colorsArray = colors ? colors.split('-') : [];

    const colorsIndexes = [
      'textColor',
      'backgroundColor',
      'primaryColor',
      'secondaryColor',
      'accentColor',
    ];

    const colorsObject = colorsArray.reduce((acc, color, index) => {
      acc[colorsIndexes[index]] = {
        color: `#${color}`,
        isLocked: false,
      };
      return acc;
    }, {} as Record<string, { color: string; isLocked: boolean }>);
    if (Object.keys(colorsObject).length) {
      dispatch(setColors(colorsObject));
    }
  }, []);
};

export default useApplyColorsFromURL;
