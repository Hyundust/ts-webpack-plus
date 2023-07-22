import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView, Article } from 'entyes/Article/model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

import cls from './ArticleList.module.scss';

export interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

export const ArticleList: React.FC<ArticleListProps> = ({
  className,
  articles,
  isLoading,
  view = ArticleView.SMALL,
}) => {
  const { t } = useTranslation();

  const skeletonCount = view === ArticleView.SMALL ? 9 : 3;

  const getSkeletons = (view: ArticleView) =>
    Array.from({length: skeletonCount }, (_, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

  const renderArticle = (article: Article) => (
    <ArticleListItem article={article} 
                     view={view} 
                     className={cls.card}
                     key={article?.id} />
  );

  return (
    <div className={classNames(cls.ArticleList, {}, [className,cls[view]])}>
      {isLoading ? (
        <>{getSkeletons(view)}</>
      ) : (
        articles?.map(renderArticle)
      )}
    </div>
  );
};
