import React from 'react';

interface IExportInputProps {
  placeholder: string[] | string;
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ExportInput: React.FC<IExportInputProps> = ({
  placeholder,
  label,
  value,
  onChange,
}): JSX.Element => {
  return (
    <>
      <label className='text-md font-bold'>{label}</label>
      <input
        type='text'
        placeholder={placeholder as string}
        className='w-full rounded-md p-4 font-mono outline-none transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none'
        value={value}
        onChange={onChange}
      />
    </>
  );
};
export default ExportInput;
