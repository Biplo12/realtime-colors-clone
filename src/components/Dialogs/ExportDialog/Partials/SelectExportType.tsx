import { motion } from 'framer-motion';
import React from 'react';

interface ISelectExportTypeProps {
  exportType: number;
  setExportType: React.Dispatch<React.SetStateAction<number>>;
}

const SelectExportType: React.FC<ISelectExportTypeProps> = ({
  exportType,
  setExportType,
}): JSX.Element => {
  const exportTypes = ['Download Zip', 'CSS', 'SCSS', 'Tailwind CSS', 'CSV'];

  const handleChangeExportType = (index: number) => {
    setExportType(index);
  };

  return (
    <div>
      <div className='flex items-center justify-center gap-3'>
        {exportTypes.map((item, index) => {
          return (
            <button
              key={index}
              className={`relative flex min-h-[40px] items-center justify-center px-2 transition-all duration-300 ease-in-out
                  ${exportType === index && 'border-black'}
              `}
              onClick={() => handleChangeExportType(index)}
            >
              {exportType === index ? (
                <motion.div
                  className='absolute bottom-0 left-0 h-[2px] w-full bg-black'
                  layoutId='underline'
                />
              ) : null}
              <h3 className='text-left text-sm font-bold'>{item}</h3>
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default SelectExportType;
