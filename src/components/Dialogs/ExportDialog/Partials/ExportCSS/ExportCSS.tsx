import React, { useState } from 'react';

import useGenerateColorCode from '@/hooks/useGenerateColorCode';

import CopyButton from '@/components/common/CopyButton';
import ExportCSSColorCode from '@/components/Dialogs/ExportDialog/Partials/ExportCSS/ExportCSSColorCode';
import ExportCSSColorTypeSelector from '@/components/Dialogs/ExportDialog/Partials/ExportCSS/ExportCSSColorTypeSelector';

interface IExportCSSProps {
  exportType: string;
}

const ExportCSS: React.FC<IExportCSSProps> = ({ exportType }): JSX.Element => {
  const [colorType, setColorType] = useState<string>('HEX');
  const { cssText } = useGenerateColorCode(colorType, exportType);

  return (
    <div className='mt-2 flex w-full flex-col items-start justify-center gap-4 rounded-lg bg-white'>
      <ExportCSSColorTypeSelector
        colorType={colorType}
        setColorType={setColorType}
      />
      <ExportCSSColorCode cssText={cssText} />
      <CopyButton text={cssText.join('\n')} />
    </div>
  );
};
export default ExportCSS;
