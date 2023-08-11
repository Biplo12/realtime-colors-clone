import React from 'react';

interface IPrimaryButton {
  textColor?: string;
  backgroundColor?: string;
  label: string;
}

const PrimaryButton: React.FC<IPrimaryButton> = ({
  textColor,
  backgroundColor,
  label,
}): JSX.Element => {
  return (
    <button
      className='transform rounded-md px-6 py-3 shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg focus:outline-none'
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
