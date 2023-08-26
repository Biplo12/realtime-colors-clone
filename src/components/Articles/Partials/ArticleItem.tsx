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
      className='flex min-h-[85px] w-full flex-col items-center justify-center gap-4 rounded-md p-4 opacity-75 transition-all duration-300 hover:opacity-100'
      style={{
        backgroundColor: primaryColor.color as string,
      }}
    >
      <h1 className='text-center text-xl'>{article.title}</h1>
    </button>
  );
};
export default ArticleItem;
