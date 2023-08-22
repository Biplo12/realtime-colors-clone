import React from 'react';
import { useAppSelector } from 'store/store-hooks';

interface IArticleItemProps {
  article: {
    title: string;
    link: string;
  };
}
const ArticleItem: React.FC<IArticleItemProps> = ({ article }): JSX.Element => {
  const { primaryColor } = useAppSelector((state) => state.global.colors);
  return (
    <button
      className='flex w-full flex-col items-center justify-center gap-4 rounded-md py-8 opacity-75 shadow-lg transition-all duration-300 hover:opacity-100'
      style={{
        backgroundColor: primaryColor.color as string,
      }}
    >
      <h1>{article.title}</h1>
    </button>
  );
};
export default ArticleItem;
