import React, { useState } from 'react';

import useGenerateColorCode from '@/hooks/useGenerateColorCode';

import ExportCSSButton from '@/components/Dialogs/ExportDialog/Partials/ExportCSS/ExportCSSButton';
import ExportCSSColorCode from '@/components/Dialogs/ExportDialog/Partials/ExportCSS/ExportCSSColorCode';
import ExportCSSColorTypeSelector from '@/components/Dialogs/ExportDialog/Partials/ExportCSS/ExportCSSColorTypeSelector';

interface IExportCSSProps {
  exportType: string;
}

const ExportCSS: React.FC<IExportCSSProps> = ({ exportType }): JSX.Element => {
  const [colorType, setColorType] = useState<string>('HEX');
  const { cssText } = useGenerateColorCode(colorType, exportType);

  return (
    <div className='mt-6 flex w-full flex-col items-start justify-center gap-4 rounded-lg bg-white'>
      <ExportCSSColorTypeSelector
        colorType={colorType}
        setColorType={setColorType}
      />
      <ExportCSSColorCode cssText={cssText} />
      <ExportCSSButton cssText={cssText} />
    </div>
  );
};
export default ExportCSS;
