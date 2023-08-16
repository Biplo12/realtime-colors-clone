import React from 'react';
import { changeLockStatus } from 'state/globalSlice';
import { useAppDispatch, useAppSelector } from 'store/store-hooks';

import LockIcon from '~/svg/lock.svg';

interface ILockColorButtonProps {
  label: string;
  buttonHover: boolean;
}

const LockColorButton: React.FC<ILockColorButtonProps> = ({
  label,
  buttonHover,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleChangeLockStatus = () => {
    dispatch(changeLockStatus(`${label.toLocaleLowerCase()}Color`));
  };
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const isLocked = useAppSelector(
    (state) =>
      state.global.colors[`${label.toLocaleLowerCase()}Color` as keyof IColors]
        .isLocked
  );
  return (
    <>
      {(buttonHover || isLocked) && (
        <button
          className={`absolute bottom-1 right-1 p-[0.125rem] hover:rounded-md hover:bg-white hover:bg-opacity-75 ${
            isLocked ? 'rounded-md bg-white bg-opacity-75' : ''
          }`}
          onClick={handleChangeLockStatus}
        >
          <LockIcon className='h-4 w-4' color={isDarkMode ? '#fff' : '#000'} />
        </button>
      )}
    </>
  );
};

export default LockColorButton;
