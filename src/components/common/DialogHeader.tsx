import React from 'react';
import { closeDialog } from 'state/dialogSlice';
import { useAppDispatch } from 'store/store-hooks';

interface IDialogHeaderProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
}

const DialogHeader: React.FC<IDialogHeaderProps> = ({
  Icon,
  title,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleCloseDialog = () => {
    dispatch(closeDialog());
  };
  return (
    <div className='flex items-center justify-between border-b p-4'>
      <p className='font-semibold text-gray-800'>{title}</p>
      <button onClick={handleCloseDialog}>
        <Icon className='h-6 w-6 cursor-pointer text-gray-600 hover:text-gray-800' />
      </button>
    </div>
  );
};
export default DialogHeader;
