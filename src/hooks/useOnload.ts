import { useEffect } from 'react';
import { closeColorPickers, randomizeColors } from 'state/globalSlice';
import { useAppDispatch, useAppSelector } from 'store/store-hooks';

import useApplyColorsFromURL from '@/hooks/useApplyColorsFromURL';
import useToolbarController from '@/hooks/useToolbarController';
import useUpdateURL from '@/hooks/useUpdateURL';

const useOnLoad = () => {
  const colors = useAppSelector((state) => state.global.colors);
  const dispatch = useAppDispatch();
  const colorPickers = useAppSelector((state) => state.global.colorPickers);
  const isColorPickerOpen = Object.values(colorPickers).some(
    (colorPicker) => colorPicker
  );

  let colorsQuery: string | undefined;
  if (typeof window !== 'undefined') {
    colorsQuery = window?.location?.search;
  }
  useApplyColorsFromURL();
  useUpdateURL();
  useToolbarController();

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
