import React from 'react';
import { changeLockStatus } from 'state/globalSlice';
import { useAppDispatch, useAppSelector } from 'store/store-hooks';

import LockIcon from '~/svg/lock.svg';

interface ILockColorButtonProps {
  label: string;
}

const LockColorButton: React.FC<ILockColorButtonProps> = ({
  label,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const textColor = useAppSelector(
    (state) => state.global.colors.textColor.color
  );
  const handleChangeLockStatus = () => {
    dispatch(changeLockStatus(`${label.toLocaleLowerCase()}Color`));
  };
  const isLocked = useAppSelector(
    (state) =>
      state.global.colors[`${label.toLocaleLowerCase()}Color` as keyof IColors]
        .isLocked
  );
  return (
    <button
      className='absolute bottom-2 right-2'
      onClick={handleChangeLockStatus}
    >
      <LockIcon
        className={`h-4 w-4 ${!isLocked ? 'opacity-50' : 'opacity-100'}`}
        stroke={textColor}
      />
    </button>
  );
};

export default LockColorButton;
