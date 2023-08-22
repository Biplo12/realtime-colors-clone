import React from 'react';
const PlansHeader: React.FC = (): JSX.Element => {
  return (
    <div className='flex flex-col gap-3'>
      <h1 className='text-center text-4xl font-bold'>Plans & Pricing</h1>
      <h3 className='text-center'>
        The tool is 100% free! This is just a generic section.
      </h3>
    </div>
  );
};
export default PlansHeader;
