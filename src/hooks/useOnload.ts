import { useEffect, useState } from 'react';
import { closeColorPickers, randomizeColors } from 'state/globalSlice';
import { useAppDispatch, useAppSelector } from 'store/store-hooks';

import useApplyColorsFromURL from '@/hooks/useApplyColorsFromURL';
import useToolbarController from '@/hooks/useToolbarController';

const useOnLoad = () => {
  const [colorsQuery, setColorsQuery] = useState<string | null>(null);
  const colors = useAppSelector((state) => state.global.colors);
  const dispatch = useAppDispatch();
  const colorPickers = useAppSelector((state) => state.global.colorPickers);
  const isColorPickerOpen = Object.values(colorPickers).some(
    (colorPicker) => colorPicker
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      const params = new URLSearchParams(url.search);
      const urlColors = params.get('colors');
      setColorsQuery(urlColors as string);
    }
  }, []);

  const areColorsNull = Object.values(colors).some(
    (color) => color.color === null
  );
  useApplyColorsFromURL();
  useToolbarController();

  useEffect(() => {
    if (!colorsQuery && areColorsNull) {
      dispatch(randomizeColors());
    }
  }, [areColorsNull, colorsQuery, dispatch]);

  const handleCloseColorPickers = () => {
    if (isColorPickerOpen) {
      dispatch(closeColorPickers());
    }
  };

  return {
    colors,
    handleCloseColorPickers,
  };
};

export default useOnLoad;
