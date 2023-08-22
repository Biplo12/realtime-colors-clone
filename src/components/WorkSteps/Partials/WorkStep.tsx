import React from 'react';
import { useAppSelector } from 'store/store-hooks';

interface IWorkStepProps {
  step: {
    index: number;
    content: string;
  };
}

const WorkStep: React.FC<IWorkStepProps> = ({ step }): JSX.Element => {
  const { accentColor } = useAppSelector((state) => state.global.colors);
  return (
    <div key={step.index} className='flex items-start justify-start gap-3 p-3'>
      <h1
        className='text-3xl font-extrabold'
        style={{
          color: accentColor.color as string,
        }}
      >
        {step.index}
      </h1>
      <p className='mt-2'>{step.content}</p>
    </div>
  );
};
export default WorkStep;
