import React, { HTMLAttributeAnchorTarget, LegacyRef } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView, Article } from 'entyes/Article/model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleList.module.scss';
import { TextSize } from 'shared/ui/Text/Text';
import { AutoSizer, List, ListRowProps, WindowScroller } from 'react-virtualized';

// Define the interface for ArticleList component props
export interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

// ArticleList functional component
export const ArticleList: React.FC<ArticleListProps> = ({
  className,
  articles,
  isLoading,
  target,
  view = ArticleView.SMALL,
}) => {
  // Use the translation hook from react-i18next to access translation functionality
  const { t } = useTranslation();


  const rowRenderer = ({index, isScrolling, key, style}:ListRowProps) =>{
    
      return (
        <div
              key={key}
              style={style}>
               <ArticleListItem
                      article={articles[index]}
                      view={view}
                      className={cls.card}
                      target={target}
    />
            </div>
      );
    }

  // Determine the number of skeletons to render based on the view type
  const skeletonCount = view === ArticleView.SMALL ? 9 : 3;

  // Generate an array of skeleton components
  const getSkeletons = (view: ArticleView) =>
    Array.from({ length: skeletonCount }, (_, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));




  // Check if there are no articles and loading has finished
  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        {/* Render a Text component with a message indicating that no articles were found */}
        <Text size={TextSize.L} title={t("Articles not found") || ""} />
      </div>
    );
  }

  return (
          <WindowScroller
              onScroll = {()=>console.log("Scrolled")}
              scrollElement={document.getElementById("PAGE_id") as Element}
              >
                {({height,width,registerChild,onChildScroll,isScrolling,scrollTop})=>(
                 <div ref={registerChild as LegacyRef<HTMLDivElement> } className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                   <List  
                   height={height??700}
                   rowCount={articles.length}
                   rowHeight={700}
                   rowRenderer={rowRenderer}
                   width={width?width-100:700}
                   autoHeight
                   onScroll={onChildScroll}
                   isScrolling={isScrolling}  
                   scrollTop={scrollTop}/>

                   { isLoading && <>{getSkeletons(view)}</> }
                </div>

                )}  
    


          </WindowScroller>
   
      

  //   <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
  //     {isLoading ? (
  //       // Render skeleton components while loading is in progress
  //       <>{getSkeletons(view)}</>
  //     ) : (
  //       // Render the list of articles by mapping over the article array
  //       articles?.map(renderArticle)
  //     )}
  //   </div>
 );
};
