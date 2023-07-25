import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticleListItem.module.scss"
import { useTranslation } from "react-i18next"
import { Article, ArticleView } from "entyes/Article/model/types/article"
import { Text } from "shared/ui/Text/Text"
import { Icon } from "shared/ui/Icon/Icon"
import Eye from "../../../../shared/assets/icons/eye-20-20.svg"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent"
import { Card } from "shared/ui/Card/Card"
import { useNavigate } from "react-router-dom"
import { HTMLAttributeAnchorTarget, memo,useCallback} from "react"
import { Avatar } from "shared/ui/Avatar/Avatar"
import { Button } from "shared/ui/Button/Button"
import { ThemeButton } from "shared/ui/Button/Button"
import { ArticleBlockType } from "entyes/Article/model/types/article"
import { ArticleTextBlock } from "entyes/Article/model/types/article"
import { AppLink } from "shared/ui/AppLink/AppLink"

export interface ArticleListItemProps{
    className?:string
    article:Article
    view:ArticleView
    target?:HTMLAttributeAnchorTarget
 }



 export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view ,target} = props;
    const { t } = useTranslation();
  
      
      

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={Eye} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
                        (block): block is ArticleTextBlock => block.type === ArticleBlockType.TEXT);

                        return (
                            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                              <Card className={cls.card}>
                                <div className={cls.header}>
                                  {article.user && (
                                    <>
                                      <Avatar size={30} src={article.user.id} />
                                      <Text text={article.user.username} className={cls.username} />
                                      <Text text={article.createdAt} className={cls.date} />
                                    </>
                                  )}
                                </div>
                                <Text title={article.title} className={cls.title} />
                                {types}
                                <img src={article.img} className={cls.img} alt={article.title} />
                                {textBlock && (
                                  <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                                )}
                                <div className={cls.footer}>
                                    <AppLink  
                                              target={target}
                                              to = {RoutePath.articals_details + article.id}>

                                            <Button  theme={ThemeButton.OUTLINE}>
                                                {t('Read more')}
                                            </Button>

                                        </AppLink>

                                  {views}
                                </div>
                              </Card>
                            </div>
                          );
                          
    }

    return (
        <AppLink target={target}
                 to = {RoutePath.articals_details + article.id} 
                 className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>

            <Card className={cls.card}>

                <div className={cls.imageWrapper}>
                    <img alt={article.title} src={article.img} className={cls.img} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>

                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>

                <Text text={article.title} className={cls.title} />

            </Card>
        </AppLink>
       
    );
});
