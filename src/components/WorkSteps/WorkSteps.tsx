import React from 'react';
import { useAppSelector } from 'store/store-hooks';

import WorkStep from '@/components/WorkSteps/Partials/WorkStep';
import WorkStepsHeader from '@/components/WorkSteps/Partials/WorkStepsHeader';

import { hexToHsl, hslToHex } from '@/utils/colorUtils';
const WorkSteps: React.FC = (): JSX.Element => {
  const { backgroundColor } = useAppSelector((state) => state.global.colors);
  const bgHSL = hexToHsl(backgroundColor.color as string);
  const darkerBgHSL = bgHSL.l - 5;
  const darkerBgHex = hslToHex(bgHSL.h, bgHSL.s, darkerBgHSL);

  const steps = [
    {
      index: 1,
      content: 'Start with two neutral colors for the text and the background.',
    },
    {
      index: 2,
      content:
        'Choose your primary and secondary colors. Primary is for main CTAs and sections, and Secondary is for less important buttons and info cards.',
    },
    {
      index: 3,
      content:
        'Accent color is an additional color. It appears in images, highlights, hyperlinks, boxes, cards, etc.',
    },
    {
      index: 4,
      content:
        'Happy with the results? Press on “Export” and choose among different options to export in various formats, like .zip, .png, CSS, SCSS, QR Code, and more.',
    },
  ];

  return (
    <div className='mxlg:w-full flex h-auto w-3/4 flex-col items-center justify-start gap-4'>
      <div
        className='mxlg:w-full mxlg:flex-col mxlg:px-8 relative flex min-h-[400px] w-full items-start justify-between gap-6 rounded-md p-12 px-20 '
        style={{
          backgroundColor: darkerBgHex,
        }}
      >
        <WorkStepsHeader />
        <div className='mxlg:flex mxlg:flex-col mxlg:gap-y-4 grid grid-cols-2 grid-rows-2 items-start justify-start gap-y-24'>
          {steps.map((step) => (
            <WorkStep key={step.index} step={step} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default WorkSteps;
