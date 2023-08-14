import React from 'react';

import DownloadZip from '@/components/Dialogs/ExportDialog/Partials/DownloadZip/DownloadZip';
import ExportCSS from '@/components/Dialogs/ExportDialog/Partials/ExportCSS/ExportCSS';
import ExportCSV from '@/components/Dialogs/ExportDialog/Partials/ExportCSV/ExportCSV';

interface IExportTypeContentProps {
  exportType: number;
}

const ExportTypeContent: React.FC<IExportTypeContentProps> = ({
  exportType,
}): JSX.Element => {
  const exportTypeMap = {
    zip: 0,
    css: 1,
    scss: 2,
    tailwindcss: 3,
    csv: 4,
  };

  const exportTypeController = () => {
    switch (exportType) {
      case exportTypeMap.zip:
        return <DownloadZip />;
      case exportTypeMap.css:
        return <ExportCSS exportType='css' />;
      case exportTypeMap.scss:
        return <ExportCSS exportType='scss' />;
      case exportTypeMap.tailwindcss:
        return <ExportCSS exportType='tailwindcss' />;
      case exportTypeMap.csv:
        return <ExportCSV />;
      default:
        return;
    }
  };

  return <>{exportTypeController()}</>;
};
export default ExportTypeContent;
