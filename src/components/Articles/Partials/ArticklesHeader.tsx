import React from 'react';
const ArticklesHeader: React.FC = (): JSX.Element => {
  return (
    <div className='flex flex-col gap-3'>
      <h1 className='text-center text-4xl font-bold'>Featured Articles</h1>
      <h3 className='text-center text-xl'>
        Just some interesting guides and posts.
      </h3>
    </div>
  );
};
export default ArticklesHeader;
