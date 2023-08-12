import { useEffect } from 'react';
import { closeColorPickers, randomizeColors } from 'state/globalSlice';
import { useAppDispatch, useAppSelector } from 'store/store-hooks';

import useApplyColorsFromURL from '@/hooks/useApplyColorsFromURL';
import useUpdateURL from '@/hooks/useUpdateURL';

const useOnLoad = () => {
  const colors = useAppSelector((state) => state.global.colors);
  const dispatch = useAppDispatch();
  const colorPickers = useAppSelector((state) => state.global.colorPickers);
  const isColorPickerOpen = Object.values(colorPickers).some(
    (colorPicker) => colorPicker
  );

  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const colorsQuery = params.get('colors');

  useUpdateURL();
  useApplyColorsFromURL();

  useEffect(() => {
    if (!colorsQuery) {
      dispatch(randomizeColors());
    }
  }, [colorsQuery, dispatch]);

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
