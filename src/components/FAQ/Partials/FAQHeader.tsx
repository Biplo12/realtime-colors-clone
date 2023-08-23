import React from 'react';
const FAQHeader: React.FC = (): JSX.Element => {
  return (
    <div className='flex min-w-[20%] flex-col items-center justify-center gap-4 text-center'>
      <h1 className='text-3xl font-bold'>FAQ</h1>
      <p className='text-lg'>Answers to some questions you might have.</p>
    </div>
  );
};
export default FAQHeader;
