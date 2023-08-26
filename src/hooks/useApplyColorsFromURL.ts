/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { setColors } from 'state/globalSlice';
import { useAppDispatch } from 'store/store-hooks';

const useApplyColorsFromURL = () => {
  const dispatch = useAppDispatch();

  let colorsQuery: string | undefined;
  if (typeof window !== 'undefined') {
    colorsQuery = window?.location?.search;
  }

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
        color: `#${color.replaceAll('%23', '')}`,
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
