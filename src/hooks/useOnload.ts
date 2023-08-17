import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();

  const colorsQuery = pathname.split('?')[1]?.split('=')[1];

  const areColorsNull = Object.values(colors).some(
    (color) => color.color === null
  );
  useUpdateURL();
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
