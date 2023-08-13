import React from 'react';

import DownloadZip from '@/components/Dialogs/ExportDialog/Partials/DownloadZip';

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

  const css = () => {
    return <div>css</div>;
  };

  const scss = () => {
    return <div>scss</div>;
  };

  const tailwindcss = () => {
    return <div>tailwindcss</div>;
  };

  const csv = () => {
    return <div>csv</div>;
  };

  const exportTypeController = () => {
    switch (exportType) {
      case exportTypeMap.zip:
        return <DownloadZip />;
      case exportTypeMap.css:
        return css();
      case exportTypeMap.scss:
        return scss();
      case exportTypeMap.tailwindcss:
        return tailwindcss();
      case exportTypeMap.csv:
        return csv();
      default:
        return;
    }
  };

  return <>{exportTypeController()}</>;
};
export default ExportTypeContent;
