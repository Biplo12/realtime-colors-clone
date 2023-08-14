import React from 'react';

interface IExportCSVInputProps {
  placeholder: string[] | string;
  label: string;
}

const ExportCSVInput: React.FC<IExportCSVInputProps> = ({
  placeholder,
  label,
}): JSX.Element => {
  return (
    <>
      <label>{label}</label>
      <input
        type='text'
        placeholder={placeholder as string}
        className='w-full rounded-md p-4 outline-none transition-all duration-300 ease-in-out hover:bg-gray-200 focus:outline-none'
        value={placeholder as string}
      />
    </>
  );
};
export default ExportCSVInput;
