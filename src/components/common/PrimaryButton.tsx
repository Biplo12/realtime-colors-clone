import React, { useState } from 'react';

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
  const [shadow, setShadow] = useState('none');

  const addShadow = () => {
    setShadow(`0px 10px 100px -5px ${backgroundColor}`);
  };

  const removeShadow = () => {
    setShadow('none');
  };

  return (
    <button
      className='transform rounded-md px-8 py-4 shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg focus:outline-none'
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        boxShadow: shadow,
      }}
      onMouseEnter={addShadow}
      onMouseLeave={removeShadow}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
