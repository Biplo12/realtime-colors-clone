/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { setColors } from 'state/globalSlice';
import { useAppDispatch } from 'store/store-hooks';

const useApplyColorsFromURL = () => {
  const dispatch = useAppDispatch();
  const [colorsQuery, setColorsQuery] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      const params = new URLSearchParams(url.search);
      const urlColors = params.get('colors');
      setColorsQuery(urlColors as string);
    }
  }, []);

  useEffect(() => {
    const colorsArray = colorsQuery ? colorsQuery.split('-') : [];

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
