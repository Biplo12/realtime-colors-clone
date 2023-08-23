import React from 'react';

import FAQHeader from '@/components/FAQ/Partials/FAQHeader';
import FAQItem from '@/components/FAQ/Partials/FAQItem';

const FAQ: React.FC = (): JSX.Element => {
  const [active, setActive] = React.useState<number | null>(null);

  const questionsAndAnswers = [
    {
      question: 'How many colors should I choose?',
      answer:
        'Normally, 3 colors are absolutely fine (meaning background, text, and one accent color). However, if you want, you can have more. Usually, we don`t add more than 6 colors across a platform. It would just make things too... complicated. Plus, it makes it hard to keep the colors consistent throughout the design.',
    },
    {
      question: 'What will I receive after downloading the exported file?',
      answer:
        'After downloading through export options, you will receive a .zip file. This file is compressed, so you will have to extract it. After extracting it, you will see a .png file and a .txt file. The .png image shows your color palette in squares next to each other. The .txt file includes the color codes in HEX and RGB. You can send these files to designers or developers, or just use them in your project.',
    },
    {
      question: 'Why do some colors have some transparency?',
      answer:
        'This website allows you to choose only opaque colors. However, to make the design more appealing, I`ve made some parts more transparent by adding a bit of opacity to them. Of course, you can use these colors however you want in your own projects.',
    },
    {
      question: 'What does the hero image represent?',
      answer:
        'The hero image is inspired by Piet Mondrian`s Composition with Large Red Plane, Yellow, Black, Grey and Blue. This composition keeps the ratio of the main colors (red, blue, and yellow) very close to the 60-30-10 rule of UI design. This is mainly why I`ve chosen this composition to visualize the distribution of the colors on the page.',
    },
  ];
  return (
    <div className='mxlg:w-full flex h-auto w-3/4 cursor-pointer flex-col items-center justify-center gap-4'>
      <FAQHeader />
      {questionsAndAnswers.map((item, index) => (
        <FAQItem
          key={index}
          active={active}
          setActive={setActive}
          index={index}
          item={item}
        />
      ))}
    </div>
  );
};
export default FAQ;
