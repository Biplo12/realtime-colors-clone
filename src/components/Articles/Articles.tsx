import React from 'react';

import ArticklesHeader from '@/components/Articles/Partials/ArticklesHeader';
import ArticleItem from '@/components/Articles/Partials/ArticleItem';
const Articles: React.FC = (): JSX.Element => {
  const featuredArticles = [
    {
      title: 'Examples of Colors from Popular Sites',
      link: '#',
    },
    {
      title: 'How to Select Colors',
      link: '#',
    },
    {
      title: 'Learn More about the Realeses',
      link: '#',
    },
  ];
  return (
    <div className='mxlg:w-full flex h-auto min-h-[80vh] w-3/4 flex-col items-center justify-center gap-12'>
      <ArticklesHeader />
      <div className='flex w-full items-center justify-between gap-20'>
        {featuredArticles.map((article, index) => (
          <ArticleItem key={index} article={article} />
        ))}
      </div>
    </div>
  );
};
export default Articles;
